package main

import (
	"reflect"
	"testing"
)

func Test_flipAndInvertImage(t *testing.T) {
	var case1 = [][]int{
		[]int{1, 0, 1},
		[]int{0, 0, 1},
		[]int{1, 0, 0},
	}
	var rst1 = [][]int{
		[]int{0, 1, 0},
		[]int{0, 1, 1},
		[]int{1, 1, 0},
	}
	t.Logf("input: %v", case1)
	temp := flipAndInvertImage(case1)
	if !reflect.DeepEqual(rst1, temp) {
		t.Fatalf("expected: %v, output: %v", rst1, temp)
	}
}
