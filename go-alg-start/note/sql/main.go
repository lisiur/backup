package main

import (
	"database/sql"

	_ "github.com/go-sql-driver/mysql"
)

func main() {
	db, err := sql.Open("mysql", "root:root@/mydatabase")
	if err != nil {
		panic(err.Error())
	}
	defer db.Close()
}
