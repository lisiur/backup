package main

import "testing"

func Test_Alg(t *testing.T) {
	var inputs = [][]int{
		[]int{7, 1, 5, 3, 6, 4},
		[]int{1, 2, 3, 4, 5},
		[]int{7, 6, 4, 3, 1},
	}
	var outputs = []int{
		7, 4, 0,
	}
	for i, v := range inputs {
		output := maxProfit(inputs[i])
		expected := outputs[i]
		if output != expected {
			t.Fatalf("input: %v\noutput: %v\nexpected: %v", v, output, expected)
		}
	}
}
