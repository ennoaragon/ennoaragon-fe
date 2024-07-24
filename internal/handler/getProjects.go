package handler

import (
    "net/http"
    "ennoaragon/internal/templates"
)


type ProjectsHandler struct {}

func NewProjectsHandler() *ProjectsHandler {
    return &ProjectsHandler{}
}

func (h *ProjectsHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {

    c := templates.Projects()
    err := templates.Base(c, "Projects by Enno").Render(r.Context(), w)
        
    if err != nil {
        http.Error(w, "Projects page unable to render it brokie", http.StatusInternalServerError)
    }
}
