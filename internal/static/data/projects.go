package data

import (
    "encoding/json"
//    "time"
    "os"
    "log"
    "path/filepath"
)

type TechChip struct{
    Name string
}

type Project struct{ 
    Title string `json:"title"`
    Date string `json:"created_at"`
    Description string `json:"description"` 
    ImageUrl string `json:"image_url"`
    TechChips []string `json:"tech_chips"`
    ExtUrl string `json:"external_url"`
 }

var Projects []Project
var Experiences []Project

func init() {
   // Open json file parse information into Projects  st
    data, err := os.ReadFile(filepath.Join("internal/static/data/", "projects.json"))
    expData, exErr := os.ReadFile(filepath.Join("internal/static/data/", "experiences.json"))

    if err != nil || exErr != nil{
        log.Fatal(err)
    }

    if err := json.Unmarshal(data, &Projects); err != nil {
        log.Fatal(err) 
    }

    if err := json.Unmarshal(expData, &Experiences); err != nil {
        log.Fatal(err) 
    }
}
