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
 }

var Projects []Project

func init() {
   // Open json file parse information into Projects  st
    data, err := os.ReadFile(filepath.Join("internal/static/data/", "projects.json"))

    if err != nil {
        log.Fatal(err)
    }

    if err := json.Unmarshal(data, &Projects); err != nil {
        log.Fatal(err)
    }
}
