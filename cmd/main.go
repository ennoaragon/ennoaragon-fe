package main

import (
	"fmt"
    "html/template"
	"log"
	"net/http"
    "ennoaragon/internal/handler"
    "path/filepath"
)
type Film struct {
    Title string
    Director string
}

func main() {
    fmt.Println("hello world")

    mux := http.NewServeMux()

    staticFiles := http.FileServer(http.Dir("internal/static"))
    mux.Handle("/static/", http.StripPrefix("/static/", staticFiles))
    // will need to remove this later
    imageFiles := http.FileServer(http.Dir("assets"))
    mux.Handle("/assets/carousel", http.StripPrefix("/assets/carousel", imageFiles))
    mux.Handle("/assets/", http.StripPrefix("/assets/", imageFiles))
    mux.HandleFunc("/", handler.Home)
    mux.HandleFunc("/about", handler.About)
    mux.HandleFunc("/projects", handler.Projects)
    mux.HandleFunc("/experience", handler.Experience)
    //mux.NotFoundHandler = http.HandlerFunc(handler.NotFound404)
    
    log.Println("Starting server on :8080")
    err := http.ListenAndServe(":8080", mux)
    log.Fatal(err)
}

func init() {
    fmt.Println("init called ")
    templates := populateTemplates()
    handler.NewHandler(templates)
}


func populateTemplates() *template.Template {
    result := template.New("templates")

    basePath := "internal/templates"
    template.Must(result.ParseFiles(
        filepath.Join(basePath, "base.html"),
        filepath.Join(basePath, "partials/nav.html"),
        filepath.Join(basePath, "partials/footer.html"),
    ))

    layoutFiles, err := filepath.Glob(filepath.Join(basePath, "*.html"))
    if err != nil {
        log.Fatal(err)
     }
    template.Must(result.ParseFiles(layoutFiles...))
    return result
}
