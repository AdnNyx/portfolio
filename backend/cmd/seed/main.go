package main

import (
	"fmt"
	"log"

	"portfoliov2-backend/internal/config"
	"portfoliov2-backend/internal/models"

	"github.com/joho/godotenv"
	"golang.org/x/crypto/bcrypt"
)

func main() {
	if err := godotenv.Load(); err != nil {
		log.Println("Peringatan: File .env tidak ditemukan")
	}

	config.ConnectDatabase()

	// Crendentials Admin
	username := "NanNyx"
	password := "Adnan18_"

	// Encrypt password using bcrypt
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	if err != nil {
		log.Fatal("Gagal melakukan hash password:", err)
	}

	// New Admin instance
	admin := models.Admin{
		Username: username,
		Password: string(hashedPassword),
	}

	// Save into database
	if err := config.DB.Create(&admin).Error; err != nil {
		log.Fatal("Gagal menyimpan akun admin ke database! Pastikan username belum ada. Error: ", err)
	}

	fmt.Println("=======================================")
	fmt.Println("Account Admin successfully created!")
	fmt.Printf("Username : %s\n", username)
	fmt.Println("Password : [Telah dienkripsi dengan aman]")
	fmt.Println("=======================================")
	fmt.Println("Catatan: Anda sudah bisa mencoba login via API Postman.")
}