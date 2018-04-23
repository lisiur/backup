package main

import (
	"log"
	"net/http"

	"./web"
)

func main() {
	http.HandleFunc("/", web.SayhelloName)
	err := http.ListenAndServe(":9090", nil)
	if err != nil {
		log.Fatal("ListenAddServe: ", err)
	}
}
