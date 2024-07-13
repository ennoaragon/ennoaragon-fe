package handler

import (
    "html/template"
    "net/http"
    "path/filepath"
)

// Templates is a reference to the parsed templates
var Templates *template.Template

// NewHandler initializes the handler with parsed templates
func NewHandler(templates *template.Template) {
        Templates = templates
}

func Home(w http.ResponseWriter, r *http.Request) {
    tmpl, err := template.ParseFiles(
        filepath.Join("internal", "templates", "base.html"),
        filepath.Join("internal", "templates", "home.html"),
        filepath.Join("internal", "templates", "partials", "nav.html"),
        filepath.Join("internal", "templates", "partials", "footer.html"),
    )
    if err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }
    tmpl.Execute(w, nil)
}

func About(w http.ResponseWriter, r *http.Request) {
    tmpl, err := template.ParseFiles(
        filepath.Join("internal", "templates", "base.html"),
        filepath.Join("internal", "templates", "about.html"),
        filepath.Join("internal", "templates", "partials", "nav.html"),
        filepath.Join("internal", "templates", "partials", "footer.html"),
    )
    if err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }
    tmpl.Execute(w, nil)
}

func Projects(w http.ResponseWriter, r *http.Request) {
    tmpl, err := template.ParseFiles(
        filepath.Join("internal", "templates", "base.html"),
        filepath.Join("internal", "templates", "projects.html"),
        filepath.Join("internal", "templates", "partials", "nav.html"),
        filepath.Join("internal", "templates", "partials", "footer.html"),
    )
    if err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }
    tmpl.Execute(w, nil)
}

func Experience(w http.ResponseWriter, r *http.Request) {
    tmpl, err := template.ParseFiles(
        filepath.Join("internal", "templates", "base.html"),
        filepath.Join("internal", "templates", "experience.html"),
        filepath.Join("internal", "templates", "partials", "nav.html"),
        filepath.Join("internal", "templates", "partials", "footer.html"),
    )
    if err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }
    tmpl.Execute(w, nil)
}

func NotFound404(w http.ResponseWriter, r *http.Request) {
    w.WriteHeader(http.StatusNotFound)
    tmpl, err := template.ParseFiles(
        filepath.Join("internal", "templates", "base.html"),
        filepath.Join("internal", "templates", "404.html"),
        filepath.Join("internal", "templates", "partials", "nav.html"),
        filepath.Join("internal", "templates", "partials", "footer.html"),
    )
    if err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }
    tmpl.ExecuteTemplate(w,"404.html",nil )
}
