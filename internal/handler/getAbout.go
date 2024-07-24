package handler


import (
    "net/http"
    "ennoaragon/internal/templates"
)


type Abouthandler struct {}

func NewAbouthandler() *Abouthandler {
    return &Abouthandler{}
}

func (h *Abouthandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {

    c := templates.About()
    err := templates.Base(c, "About Enno").Render(r.Context(), w)
        
    if err != nil {
        http.Error(w, "About page unable to render it brokie", http.StatusInternalServerError)
    }   
}
