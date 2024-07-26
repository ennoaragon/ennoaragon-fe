package handler

import (
    "net/http"
    "ennoaragon/internal/templates"
    "ennoaragon/internal/static/data"
)


type Abouthandler struct {}

func NewAbouthandler() *Abouthandler {
    return &Abouthandler{}
}

func (h *Abouthandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {

    c := templates.About(data.CarouselImages )
    err := templates.Base(c, "About Enno").Render(r.Context(), w)
        
    if err != nil {
        http.Error(w, "About page unable to render it brokie", http.StatusInternalServerError)
    }   
}
