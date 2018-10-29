package main

import "testing"

func Test_Alg(t *testing.T) {
	var inputs = [][]int{
		[]int{1, 2, 2, 3, 1},
		[]int{1, 2, 2, 3, 1, 4, 2},
	}
	var outputs = []int{
		2, 6,
	}
	for i, v := range inputs {
		output := findShortestSubArray(inputs[i])
		expected := outputs[i]
		if output != expected {
			t.Fatalf("input: %v\noutput: %v\nexpected: %v", v, output, expected)
		}
	}
}
