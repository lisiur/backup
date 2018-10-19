package main

import (
	"reflect"
	"testing"
)

func Test_Alg(t *testing.T) {
	var inputs = [][]int{
		[]int{4, 3, 2, 7, 8, 2, 3, 1},
		[]int{4, 3, 7, 7, 7, 2, 3, 1},
		[]int{4, 7, 7, 7, 2, 2, 2, 1},
		[]int{1},
	}
	var outputs = [][]int{
		[]int{5, 6},
		[]int{5, 6, 8},
		[]int{3, 5, 6, 8},
		[]int{},
	}
	for i, v := range inputs {
		output := findDisappearedNumbers(inputs[i])
		expected := outputs[i]
		if !checkRight(output, expected) {
			t.Fatalf("input: %v\noutput: %v\nexpected: %v", v, output, expected)
		}
	}
}

func checkRight(output []int, expected []int) bool {
	return reflect.DeepEqual(output, expected)
}
