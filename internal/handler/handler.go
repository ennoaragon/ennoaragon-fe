package handler

import (
    "html/template"
    "net/http"
    "path/filepath"
)

func Home(w http.ResponseWriter, r *http.Request) {
    tmpl, err := template.ParseFiles(
        filepath.Join("internal", "templates", "base.tmpl"),
        filepath.Join("internal", "templates", "home.tmpl"),
    )
    if err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }
    tmpl.Execute(w, nil)
}

