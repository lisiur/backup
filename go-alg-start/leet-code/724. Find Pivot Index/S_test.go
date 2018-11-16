package main

import (
	"reflect"
	"testing"
)

func Test_Alg(t *testing.T) {
	var inputs = [][]int{
		[]int{1, 7, 3, 6, 5, 6},
		[]int{1, 2, 3},
	}
	var outputs = []int{
		3, -1,
	}
	for i, v := range inputs {
		output := pivotIndex2(inputs[i])
		expected := outputs[i]
		if !checkRight(output, expected) {
			t.Fatalf("input: %v\noutput: %v\nexpected: %v", v, output, expected)
		}
	}

}

func checkRight(a interface{}, b interface{}) bool {
	return reflect.DeepEqual(a, b)
}
