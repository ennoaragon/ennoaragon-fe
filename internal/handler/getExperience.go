package handler

import (
    "net/http"
    "ennoaragon/internal/templates"
)   

type ExperienceHandler struct {}

func NewExperienceHandler() *ExperienceHandler {
    return &ExperienceHandler{}
}   

func (h *ExperienceHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
    c := templates.Experience()
    err := templates.Base(c, "My Experience").Render(r.Context(), w)
        
    if err != nil {
        http.Error(w, "Experience page unable to render it brokie", http.StatusInternalServerError)
    }
}
