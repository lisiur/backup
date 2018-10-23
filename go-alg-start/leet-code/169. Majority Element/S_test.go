package main

import "testing"

func Test_Alg(t *testing.T) {
	var inputs = [][]int{
		[]int{1, 1, 2, 2, 2, 2, 3, 3},
		[]int{3, 2, 3},
		[]int{2, 2, 1, 1, 1, 2, 2},
		[]int{2, 1, 1, 1, 1, 2, 2},
	}
	var outputs = []int{2, 3, 2, 1}
	for i, v := range inputs {
		output := majorityElement(v)
		expected := outputs[i]
		if output != expected {
			t.Fatalf("input: %v\noutput: %v\nexpected: %v", v, output, expected)
		}
	}
}
