package data

import (
    "os"
    "log"
    "path/filepath"
    "strings"
)

type ImageData struct {
    Id int
    Title    string
    LocalSrc string
    RemoteSrc   string
}

type CarouselItems struct {
    Size int
    Images []ImageData
}
var CarouselImages []ImageData
// build a carousel component for templ consumption

var Carousel CarouselItems

func init() {

    // We will need to change path when we deploy to GCP
    imgPath := "assets"

    files, err := os.ReadDir(imgPath)
    if err != nil {
        log.Fatal(err)
    }

    count := 0
    for _, file := range files {
        if filepath.Ext(file.Name()) == ".webp" {
            title := strings.ReplaceAll(file.Name(),"_", " ")
            title = strings.ReplaceAll(title, ".webp", "") 
            image := ImageData{
                Id: count,
                Title:   title,
                LocalSrc: filepath.Join(imgPath, file.Name()),
                RemoteSrc: filepath.Join("https://storage.googleapis.com/ea-frontend-assets", file.Name()),
            }
            count++
            CarouselImages = append(CarouselImages, image)
        }
    }

    Carousel = CarouselItems{
        Size: len(CarouselImages),
        Images: CarouselImages,
    }

    print(CarouselImages)
}
