
package handler

import (
    "net/http"
    "ennoaragon/internal/templates"
    "ennoaragon/internal/static/data"
    "os"
)


type Galleryhandler struct {}

func NewGalleryhandler() *Galleryhandler {
    return &Galleryhandler{}
}

func (h *Galleryhandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
    env := os.Getenv("ENV")

    var production bool
    if production = false; env == "production" {
        production = true
    }

    c := templates.Gallery(data.CarouselImages, production )
    err := templates.Base(c, "Enno's Gallery").Render(r.Context(), w)
        
    if err != nil {
        http.Error(w, "About page unable to render it brokie", http.StatusInternalServerError)
    }   
}
