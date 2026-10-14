package config

import (
	"fmt"
	"log"
	"os"

	"portfoliov2-backend/internal/models"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func ConnectDatabase() {
	host := os.Getenv("DB_HOST")
	user := os.Getenv("DB_USER")
	password := os.Getenv("DB_PASSWORD")
	dbname := os.Getenv("DB_NAME")
	port := os.Getenv("DB_PORT")
	sslmode := os.Getenv("DB_SSLMODE")

	dsn := fmt.Sprintf("host=%s user=%s password=%s dbname=%s port=%s sslmode=%s",
		host, user, password, dbname, port, sslmode)

	database, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal("Failed to connect to Database: ", err)
	}

	fmt.Println("Connected to Database successfully!")

	// Auto Migration
	err = database.AutoMigrate(
		&models.Project{},
		&models.Blog{},
		&models.Contact{},
		&models.Certificate{},
		&models.Admin{},
	)
	if err != nil {
		log.Fatal("Failed to migrate database: ", err)
	}

	fmt.Println("Database migration completed successfully!")

	DB = database
}