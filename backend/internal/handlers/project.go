package handlers

import (
	"net/http"

	"portfoliov2-backend/internal/config"
	"portfoliov2-backend/internal/models"

	"github.com/gin-gonic/gin"
)

func GetProjects(c *gin.Context) {
	var projects []models.Project
	
	if err := config.DB.Find(&projects).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Gagal mengambil data proyek"})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"status": "success",
		"data":   projects,
	})
}

type ProjectInput struct {
	Title    string `json:"title" binding:"required"`
	Category string `json:"category" binding:"required"`
	Image    string `json:"image" binding:"required"`
	Tech     string `json:"tech"`
	Link     string `json:"link"`
}

func CreateProject(c *gin.Context) {

	var input ProjectInput
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Data tidak valid atau kurang lengkap"})
		return
	}

	project := models.Project{
		Title:    input.Title,
		Category: input.Category,
		Image:    input.Image,
		Tech:     input.Tech,
		Link:     input.Link,
	}

	if err := config.DB.Create(&project).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Gagal menyimpan proyek ke database"})
		return
	}

	c.JSON(http.StatusCreated, gin.H{
		"status":  "success",
		"message": "Proyek berhasil ditambahkan",
		"data":    project,
	})
}

func UpdateProject(c *gin.Context) {
	id := c.Param("id")

	var project models.Project
	if err := config.DB.First(&project, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Proyek tidak ditemukan"})
		return
	}

	var input ProjectInput
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Data tidak valid atau kurang lengkap"})
		return
	}

	project.Title = input.Title
	project.Category = input.Category
	project.Image = input.Image
	project.Tech = input.Tech
	project.Link = input.Link

	if err := config.DB.Save(&project).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Gagal memperbarui proyek"})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"status":  "success",
		"message": "Proyek berhasil diperbarui",
		"data":    project,
	})
}

func DeleteProject(c *gin.Context) {
	id := c.Param("id")

	var project models.Project
	if err := config.DB.First(&project, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Proyek tidak ditemukan"})
		return
	}

	if err := config.DB.Delete(&project).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Gagal menghapus proyek"})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"status":  "success",
		"message": "Proyek berhasil dihapus",
	})
}