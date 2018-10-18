package main

import "fmt"

type notifier interface {
	notify(hello string)
	alert()
}

type user struct {
	name string
}

type admin struct {
	user
	level int
}

func (user *user) notify(hello string) {
	fmt.Printf("%s %v\n", hello, user.name)
}
func (user *user) alert() {
	fmt.Printf("Alert %v\n", user.name)
}

func (admin *admin) notify(hello string) {
	fmt.Printf("%s admin %v\n", hello, admin.name)
}
func (admin *admin) alert() {
	fmt.Printf("Alert admin %v\n", admin.name)
}

func sendNotification(n notifier) {
	n.notify("HI")
	n.alert()
}

func main() {
	u := user{
		name: "lisiur",
	}
	ad := admin{
		user:  u,
		level: 1,
	}
	sendNotification(&u)
	sendNotification(&ad)
}
