package handlers

import (
	"net/http"

	"portfoliov2-backend/internal/config"
	"portfoliov2-backend/internal/models"

	"github.com/gin-gonic/gin"
)

// Struct untuk validasi input dari frontend
type ContactInput struct {
	Name    string `json:"name" binding:"required"`
	Email   string `json:"email" binding:"required,email"`
	Message string `json:"message" binding:"required"`
}

func SubmitContact(c *gin.Context) {
	var input ContactInput

	// Validasi input JSON
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Data tidak valid atau kurang lengkap"})
		return
	}

	// Buat object contact baru
	contact := models.Contact{
		Name:    input.Name,
		Email:   input.Email,
		Message: input.Message,
	}

	// Simpan ke Database
	if err := config.DB.Create(&contact).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Gagal menyimpan pesan"})
		return
	}

	c.JSON(http.StatusCreated, gin.H{
		"status":  "success",
		"message": "Pesan berhasil dikirim!",
	})
}