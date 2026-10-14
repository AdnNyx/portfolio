package routes

import (
	"portfoliov2-backend/internal/handlers"
	"portfoliov2-backend/internal/middleware"

	"github.com/gin-gonic/gin"
)

func SetupRoutes(r *gin.Engine) {
	v1 := r.Group("/api/v1")
	{
		// Public Routes
		v1.POST("/login", handlers.Login) 
		
		v1.GET("/projects", handlers.GetProjects)
		v1.GET("/blogs", handlers.GetBlogs)
		v1.POST("/contact", handlers.SubmitContact)

		// Admin Routes
		admin := v1.Group("/admin")
		admin.Use(middleware.JWTAuth())
		{
			// Endpoint CRUD Project
			admin.POST("/projects", handlers.CreateProject)
			admin.PUT("/projects/:id", handlers.UpdateProject)    
			admin.DELETE("/projects/:id", handlers.DeleteProject) 
			
			// Endpoint CRUD Blog
			admin.POST("/blogs", handlers.CreateBlog)             
		}
	}
}