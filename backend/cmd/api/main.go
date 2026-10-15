package main

import (
	"log"
	"net/http"
	"os"

	"portfoliov2-backend/internal/config"
	"portfoliov2-backend/internal/routes"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

// Deklarasi engine Gin secara global agar bisa dikonsumsi oleh Vercel
var app *gin.Engine

func init() {
	// Load variabel .env
	err := godotenv.Load()
	if err != nil {
		log.Println("Peringatan: File .env tidak ditemukan, menggunakan environment system")
	}

	// Database Connection 
	config.ConnectDatabase()

	// Inisialisasi Gin Router
	app = gin.Default()

	// Configure CORS
	app.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:3000"},
		AllowMethods:     []string{"GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Accept", "Authorization"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
	}))

	// Endpoint Test
	app.GET("/api/health", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"status":  "success",
			"message": "API Portofolio berjalan dengan baik di Vercel Serverless!",
		})
	})

	routes.SetupRoutes(app)
}

func Handler(w http.ResponseWriter, r *http.Request) {
	app.ServeHTTP(w, r)
}

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	log.Printf("Server lokal berjalan di http://localhost:%s\n", port)
	app.Run(":" + port)
}