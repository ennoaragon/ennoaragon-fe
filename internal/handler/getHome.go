package handler

import (
	"net/http"
    "ennoaragon/internal/templates"
)

type HomeHandler struct {}

func NewHomeHandler() *HomeHandler {
    return &HomeHandler{}
}

func (h *HomeHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
    c := templates.Home()

    err := templates.Base(c, "Enno Aragon").Render(r.Context(),w)
    if err != nil {
        http.Error(w, "Home render failed ", http.StatusInternalServerError)
    }
}
