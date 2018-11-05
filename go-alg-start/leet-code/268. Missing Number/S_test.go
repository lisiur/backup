package main

import (
	"reflect"
	"testing"
)

func Test_Alg(t *testing.T) {
	var inputs = [][]int{
		[]int{3, 0, 1},
		[]int{9, 6, 4, 2, 3, 5, 7, 0, 1},
	}
	var outputs = []int{
		2, 8,
	}
	for i, v := range inputs {
		output := alg(v)
		expected := outputs[i]
		if !checkRight(output, expected) {
			t.Fatalf("input: %v\noutput: %v\nexpected: %v", v, output, expected)
		}
	}

}

func checkRight(a interface{}, b interface{}) bool {
	return reflect.DeepEqual(a, b)
}
