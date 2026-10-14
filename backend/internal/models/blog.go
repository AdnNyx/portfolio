package models

import (
	"time"
	"gorm.io/gorm"
)

type Blog struct {
	ID          uint           `gorm:"primaryKey" json:"id"`
	Slug        string         `gorm:"type:varchar(255);uniqueIndex;not null" json:"slug"`
	Title       string         `gorm:"type:varchar(255);not null" json:"title"`
	Excerpt     string         `gorm:"type:text;not null" json:"excerpt"`
	Content     string         `gorm:"type:text;not null" json:"content"`
	Image       string         `gorm:"type:text" json:"image"`
	ReadTime    string         `gorm:"type:varchar(50)" json:"read_time"`
	PublishedAt time.Time      `json:"published_at"`
	CreatedAt   time.Time      `json:"created_at"`
	UpdatedAt   time.Time      `json:"updated_at"`
	DeletedAt   gorm.DeletedAt `gorm:"index" json:"-"`
}