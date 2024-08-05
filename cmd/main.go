package main

import (
	"fmt"
	"log"
	"net/http"
    "ennoaragon/internal/handler"
    "os"
    "github.com/joho/godotenv"
)
type Film struct {
    Title string
    Director string
}

var Environment = "development"

func init() {
    Environment = os.Getenv("env")
}

func main() {
    errEnv := godotenv.Load()
    if errEnv != nil {
        log.Fatal("Error loading .env file")
    }
    env := os.Getenv("ENV")
    fmt.Println("start of program in environment: " , env)

    mux := http.NewServeMux()

    staticFiles := http.FileServer(http.Dir("internal/static"))
    mux.Handle("/static/", http.StripPrefix("/static/", staticFiles))

    imageFiles := http.FileServer(http.Dir("assets"))
    mux.Handle("/assets/", http.StripPrefix("/assets/", imageFiles))

    //routes
    mux.HandleFunc("/", handler.NewHomeHandler().ServeHTTP)
    mux.HandleFunc("/about", handler.NewAbouthandler().ServeHTTP)
    mux.HandleFunc("/projects", handler.NewProjectsHandler().ServeHTTP)
    //mux.HandleFunc("/experience", handler.NewExperienceHandler().ServeHTTP)
    mux.HandleFunc("/gallery", handler.NewGalleryhandler().ServeHTTP)

    log.Println("Starting server on :8080")
    err := http.ListenAndServe(":8080", mux)
    if err != nil {
        log.Fatal(err)
    }
}
