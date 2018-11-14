package main

import (
	"reflect"
	"testing"
)

func Test_Alg(t *testing.T) {
	var inputs = [][]int{
		[]int{0, 0, 3, 2},
		[]int{1, 0},
		[]int{3, 6, 1, 0},
		[]int{1, 2, 3, 4},
		[]int{3, 6, 6, 0},
	}
	var outputs = []int{
		-1, 0, 1, -1, -1,
	}
	for i, v := range inputs {
		output := dominantIndex(inputs[i])
		expected := outputs[i]
		if !checkRight(output, expected) {
			t.Fatalf("input: %v\noutput: %v\nexpected: %v", v, output, expected)
		}
	}

}

func checkRight(a interface{}, b interface{}) bool {
	return reflect.DeepEqual(a, b)
}
