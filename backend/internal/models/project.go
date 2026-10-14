package models

import (
	"time"
	"gorm.io/gorm"
)

type Project struct {
	ID          uint           `gorm:"primaryKey" json:"id"`
	Title       string         `gorm:"type:varchar(255);not null" json:"title"`
	Category    string         `gorm:"type:varchar(100);not null" json:"category"`
	Image       string         `gorm:"type:text;not null" json:"image"`
	Tech        string         `gorm:"type:text" json:"tech"`
	Link        string         `gorm:"type:varchar(255)" json:"link"`
	CreatedAt   time.Time      `json:"created_at"`
	UpdatedAt   time.Time      `json:"updated_at"`
	DeletedAt   gorm.DeletedAt `gorm:"index" json:"-"`
}