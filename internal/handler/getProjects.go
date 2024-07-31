package handler

import (
    "net/http"
    "ennoaragon/internal/templates"
    "ennoaragon/internal/static/data"
)


type ProjectsHandler struct {}

func NewProjectsHandler() *ProjectsHandler {
    return &ProjectsHandler{}
}

func (h *ProjectsHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {

    c := templates.Projects(data.Projects, data.Experiences)
    err := templates.Base(c, "Projects by Enno").Render(r.Context(), w)
        
    if err != nil {
        http.Error(w, "Projects page unable to render it brokie", http.StatusInternalServerError)
    }
}
