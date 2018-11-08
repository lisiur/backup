package main

import (
	"reflect"
	"testing"
)

func Test_Alg(t *testing.T) {
	var inputs = [][]int{
		[]int{1, 3, 5, 4, 7},
		[]int{2, 2, 2, 2, 2},
		[]int{},
	}
	var outputs = []int{
		3, 1, 0,
	}
	for i, v := range inputs {
		output := findLengthOfLCIS(inputs[i])
		expected := outputs[i]
		if !checkRight(output, expected) {
			t.Fatalf("input: %v\noutput: %v\nexpected: %v", v, output, expected)
		}
	}

}

func checkRight(a, b interface{}) bool {
	return reflect.DeepEqual(a, b)
}
