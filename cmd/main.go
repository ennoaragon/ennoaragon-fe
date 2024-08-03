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
    fmt.Println("hello world")

    mux := http.NewServeMux()

    staticFiles := http.FileServer(http.Dir("internal/static"))
    mux.Handle("/static/", http.StripPrefix("/static/", staticFiles))
    // will need to remove this later
    imageFiles := http.FileServer(http.Dir("assets"))
    //mux.Handle("/assets/carousel", http.StripPrefix("/assets/carousel", imageFiles))
    mux.Handle("/assets/", http.StripPrefix("/assets/", imageFiles))
    //routes
    mux.HandleFunc("/", handler.NewHomeHandler().ServeHTTP)
    mux.HandleFunc("/about", handler.NewAbouthandler().ServeHTTP)
    mux.HandleFunc("/projects", handler.NewProjectsHandler().ServeHTTP)
    //mux.HandleFunc("/experience", handler.NewExperienceHandler().ServeHTTP)
    //mux.NotFoundHandler = http.HandlerFunc(handler.NotFound404)
    
    log.Println("Starting server on :8080")
    err := http.ListenAndServe(":8080", mux)
    log.Fatal(err)
}

//func init() {
//    fmt.Println("init called ")
//    templates := populateTemplates()
//    handler.NewHandler(templates)
//}


//func populateTemplates() *template.Template {
//    result := template.New("templates")
//
//    basePath := "internal/templates"
//    template.Must(result.ParseFiles(
//        filepath.Join(basePath, "base.html"),
//        filepath.Join(basePath, "partials/nav.html"),
//        filepath.Join(basePath, "partials/footer.html"),
//    ))
//
//    layoutFiles, err := filepath.Glob(filepath.Join(basePath, "*.html"))
//    if err != nil {
//        log.Fatal(err)
//     }
//    template.Must(result.ParseFiles(layoutFiles...))
//    return result
//}
