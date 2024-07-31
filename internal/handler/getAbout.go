package handler

import (
    "net/http"
    "ennoaragon/internal/templates"
    "ennoaragon/internal/static/data"
    "os"
)


type Abouthandler struct {}

func NewAbouthandler() *Abouthandler {
    return &Abouthandler{}
}

func (h *Abouthandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
    env := os.Getenv("ENV")
    var videoUrl string
    if videoUrl = "/assets/jumbo_cam_heart.mp4"; env == "production" {
        videoUrl = "https://storage.googleapis.com/ea-frontend-assets/jumbo_cam_heart.mp4"
    }
    var production bool
    if production = false; env == "production" {
        production = true
    }
    c := templates.About(videoUrl, data.CarouselImages, production )
    err := templates.Base(c, "About Enno").Render(r.Context(), w)
        
    if err != nil {
        http.Error(w, "About page unable to render it brokie", http.StatusInternalServerError)
    }   
}
