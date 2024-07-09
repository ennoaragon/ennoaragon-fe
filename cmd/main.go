package main

import (
	"fmt"
    "html/template"
	"log"
	"net/http"
)
type Film struct {
    Title string
    Director string
}

func main() {
    fmt.Println("hello world")

    h1 := func(w http.ResponseWriter, r *http.Request) {
        tmpl := template.Must(template.ParseFiles("./public/index.html"))
        films := map[string][]Film{
            "Films": {
                {Title: "Casablanca", Director: "Michael Curtiz"},
                {Title: "Cool Hand Luke", Director: "Stuart Rosenberg"},
                {Title: "Bullitt", Director: "Peter Yates"},
            },
        }
        tmpl.Execute(w, films)
    }
    http.HandleFunc("/", h1)
    log.Fatal(http.ListenAndServe(":8080", nil))


    mux := http.NewServeMux()
    mux.HandleFunc("/", handler.Home)

    fs := http.FileServer(http.Dir("./internal/static"))
    mux.Handle("/static/", http.StripPrefix("/static/", fs))

    log.Println("Starting server on :8080")
    err := http.ListenAndServe(":8080", mux)
    log.Fatal(err)
}
