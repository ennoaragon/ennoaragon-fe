package handler

import (
    "net/http"
    "ennoaragon/internal/templates"
    //"os"
)


type NotFound404Handler struct {}

func NewNotFound404Handler() *NotFound404Handler {
    return &NotFound404Handler{} 
}

func (h *NotFound404Handler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
    //env := os.Getenv("ENV")
    c := templates.NotFound404()
    err := templates.Base(c, "Not Found").Render(r.Context(), w)
        
    if err != nil {
        http.Error(w, "About page unable to render it brokie", http.StatusInternalServerError)
    }   
}
