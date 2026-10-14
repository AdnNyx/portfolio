package middleware

import (
	"net/http"
	"os"
	"strings"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v5"
)

func JWTAuth() gin.HandlerFunc {
	return func(c *gin.Context) {
		// 1. Ekstrak header Authorization
		authHeader := c.GetHeader("Authorization")
		if authHeader == "" {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "Akses ditolak. Token tidak ditemukan."})
			c.Abort() // Hentikan request agar tidak diteruskan ke handler berikutnya
			return
		}

		// 2. Format standar industri: "Bearer <token>"
		parts := strings.Split(authHeader, " ")
		if len(parts) != 2 || parts[0] != "Bearer" {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "Format header harus: Bearer {token}"})
			c.Abort()
			return
		}
		tokenString := parts[1]

		// 3. Parse dan Validasi Token
		secret := os.Getenv("JWT_SECRET")
		if secret == "" {
			secret = "super_secret_portfolio_key_2026"
		}

		token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
			// Pastikan metode enkripsinya benar (HMAC) untuk menghindari celah serangan "None Algorithm"
			if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
				return nil, jwt.ErrSignatureInvalid
			}
			return []byte(secret), nil
		})

		// 4. Tangani error parsing atau token kedaluwarsa
		if err != nil || !token.Valid {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "Token tidak valid atau sudah kedaluwarsa. Silakan login kembali."})
			c.Abort()
			return
		}

		// 5. Context Injection (Menyisipkan username ke dalam gin.Context)
		// Ini memungkinkan handler berikutnya tahu SIAPA admin yang sedang melakukan aksi.
		if claims, ok := token.Claims.(jwt.MapClaims); ok {
			c.Set("username", claims["sub"])
		}

		// Lanjutkan ke handler utama jika lolos semua pemeriksaan
		c.Next()
	}
}