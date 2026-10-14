package handlers

import (
	"net/http"

	"portfoliov2-backend/internal/config"
	"portfoliov2-backend/internal/models"

	"github.com/gin-gonic/gin"
)

func GetBlogs(c *gin.Context) {
	var blogs []models.Blog
	
	if err := config.DB.Find(&blogs).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Gagal mengambil data blog"})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"status": "success",
		"data":   blogs,
	})
}

type BlogInput struct {
	Slug     string `json:"slug" binding:"required"`
	Title    string `json:"title" binding:"required"`
	Excerpt  string `json:"excerpt" binding:"required"`
	Content  string `json:"content" binding:"required"`
	Image    string `json:"image"`
	ReadTime string `json:"read_time"`
}

func CreateBlog(c *gin.Context) {
	var input BlogInput
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Data tidak valid atau kurang lengkap"})
		return
	}

	var existingBlog models.Blog
	if err := config.DB.Where("slug = ?", input.Slug).First(&existingBlog).Error; err == nil {
		c.JSON(http.StatusConflict, gin.H{"error": "Slug sudah digunakan, silakan gunakan slug lain"})
		return
	}

	blog := models.Blog{
		Slug:     input.Slug,
		Title:    input.Title,
		Excerpt:  input.Excerpt,
		Content:  input.Content,
		Image:    input.Image,
		ReadTime: input.ReadTime,
	}

	if err := config.DB.Create(&blog).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Gagal menyimpan artikel blog"})
		return
	}

	c.JSON(http.StatusCreated, gin.H{
		"status":  "success",
		"message": "Artikel blog berhasil ditambahkan",
		"data":    blog,
	})
}