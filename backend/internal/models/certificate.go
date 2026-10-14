package models
import "gorm.io/gorm"

type Certificate struct {
	gorm.Model
	Title  string `gorm:"type:varchar(255);not null" json:"title"`
	Issuer string `gorm:"type:varchar(255);not null" json:"issuer"`
	Date   string `gorm:"type:varchar(100)" json:"date"`
	Link   string `gorm:"type:varchar(255)" json:"link"`
}