package main

import (
	"reflect"
	"testing"
)

func Test_Alg(t *testing.T) {
	var inputs = [][]int{
		[]int{1, 0, 0, 0, 1, 0, 1},
		[]int{1, 0, 0, 0},
		[]int{0, 0, 1},
		[]int{0, 1},
	}
	var outputs = []int{
		2, 3, 2, 1,
	}
	for i, v := range inputs {
		output := maxDistToClosest(inputs[i])
		expected := outputs[i]
		if !checkRight(output, expected) {
			t.Fatalf("input: %v\noutput: %v\nexpected: %v", v, output, expected)
		}
	}

}

func checkRight(a interface{}, b interface{}) bool {
	return reflect.DeepEqual(a, b)
}
