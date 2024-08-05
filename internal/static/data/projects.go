package data

import (
	"encoding/json"
	"log"
	"os"
	"path/filepath"
	"github.com/a-h/templ"
)

type TechChip struct{
    Name string
}

type Project struct{ 
    Title string `json:"title"`
    Date string `json:"created_at"`
    Description string `json:"description"` 
    Tasks []string `json:"tasks"`
    ImageUrl string `json:"image_url"`
    TechChips []string `json:"tech_chips"`
    ExtUrl templ.SafeURL `json:"external_url"`
    MoreLinks []templ.SafeURL `json:"more_links"`
    Links [] string `json:"more_links"`
 }

var Projects [] *Project
var Experiences [] *Project

func init() {
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

// create functions to get projects and expereince from json file online
