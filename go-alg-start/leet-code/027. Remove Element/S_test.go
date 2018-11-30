package main

import (
	"reflect"
	"testing"
)

func Test_Alg(t *testing.T) {
	var inputs = [][]int{
		[]int{3, 2, 2, 3},
		[]int{0, 1, 2, 2, 3, 0, 4, 2},
	}
	var inputs2 = []int{
		3, 2,
	}
	var outputs = []int{
		3, 2,
	}
	for i, v := range inputs {
		output := removeElement(inputs[i], inputs2[i])
		expected := outputs[i]
		if !checkRight(output, expected) {
			t.Fatalf("input: %v\noutput: %v\nexpected: %v", v, output, expected)
		}
	}

}

func checkRight(a interface{}, b interface{}) bool {
	return reflect.DeepEqual(a, b)
}
