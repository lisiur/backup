package main

import (
	"reflect"
	"testing"
)

func Test_Alg(t *testing.T) {
	var inputs = [][]int{
		[]int{0},
		[]int{-1},
		[]int{-2, 1, -3, 4, -1, 2, 1, -5, 4},
	}
	var outputs = []int{
		0,
		-1,
		6,
	}
	for i, v := range inputs {
		output := maxSubArray(inputs[i])
		expected := outputs[i]
		if !checkRight(output, expected) {
			t.Fatalf("input: %v\noutput: %v\nexpected: %v", v, output, expected)
		}
	}

}

func checkRight(a interface{}, b interface{}) bool {
	return reflect.DeepEqual(a, b)
}
