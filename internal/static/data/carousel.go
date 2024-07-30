package data

import (
	"encoding/json"
	"fmt"
	"log"
	"os"
	"path/filepath"
)

type ImageData struct {
    Id int `json:"Id"`
    Title    string `json:"Title"`
    LocalSrc string `json:"LocalSrc"`
    RemoteSrc  string `json:"RemoteSrc"`
}

type CarouselItems struct {
    Size int
    Images []ImageData
}
var CarouselImages []ImageData
// build a carousel component for templ consumption

var Carousel CarouselItems

func init() {
    data, err := os.ReadFile(filepath.Join("internal/static/data/", "carousel.json"))

    if err != nil {
        log.Fatal(err)
    }

    if err := json.Unmarshal(data, &CarouselImages); err != nil {
        fmt.Println("Error parsing json", err)
        log.Fatal(err) 
    }

//    if os.Getenv("ENV") == "production" {
//        // Future make api call to get all files names in the storage bucket  
//        print("Not implemented yet")
//
//        return
//    }
//
//    LocalCarouselImages()
}

//func LocalCarouselImages() {
//
//    // We will need to change path when we deploy to GCP
//    imgPath := "assets"
//
//    files, err := os.ReadDir(imgPath)
//    if err != nil {
//        log.Fatal(err)
//    }
//
//    for _, file := range files {
//        count := 0
//        if filepath.Ext(file.Name()) == ".webp" {
//            title := strings.ReplaceAll(file.Name(),"_", " ")
//            title = strings.ReplaceAll(title, ".webp", "") 
//            image := ImageData{
//                Id: count,
//                Title:   title,
//                LocalSrc: filepath.Join(imgPath, file.Name()),
//                RemoteSrc: filepath.Join("https://storage.googleapis.com/ea-frontend-assets", file.Name()),
//            }
//            count++
//            CarouselImages = append(CarouselImages, image)
//        }
//    }
//
//    if len(CarouselImages) > 0 {
//        //create the json file for this
//        jsonData, err := json.Marshal(CarouselImages)
//        if err != nil {
//            log.Fatal(err)
//        }   
//
//        // write to file
//        os.WriteFile("/internal/static/data/testing.json", jsonData, 0644)
//
//    } 
////    Carousel = CarouselItems{
////        Size: len(CarouselImages),
////        Images: CarouselImages,
////    }
//
//    print(CarouselImages)
//}
