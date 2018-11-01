package main

import (
	"fmt"
	"sync"
	"time"
)

var wg sync.WaitGroup

func main() {
	baton := make(chan int)

	wg.Add(1)

	go Runner(baton)

	baton <- 1

	wg.Wait()
}

// Runner .
func Runner(baton chan int) {
	var newRunner int
	runner := <-baton
	fmt.Printf("runner %d running with baton\n", runner)

	if runner != 4 {
		newRunner = runner + 1
		fmt.Printf("runner %d to the line\n", newRunner)
		go Runner(baton)
	}

	time.Sleep(100 * time.Millisecond)

	if runner == 4 {
		fmt.Printf("runner %d finished, race over\n", runner)
		wg.Done()
		return
	}

	fmt.Printf("runner %d exchange with runner %d\n", runner, newRunner)
	baton <- newRunner
}
