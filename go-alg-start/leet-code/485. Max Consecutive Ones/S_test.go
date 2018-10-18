package main

import "testing"

func Test_Alg(t *testing.T) {
	var inputs = [][]int{
		[]int{1, 1, 0, 1, 1, 1},
		[]int{1, 1, 1, 1, 0, 1, 1, 1},
		[]int{1},
		[]int{0},
	}
	var outputs = []int{
		3,
		4,
		1,
		0,
	}
	for i, v := range inputs {
		output := findMaxConsecutiveOnes(v)
		expected := outputs[i]
		if output != expected {
			t.Fatalf("input: %v\noutput: %v\nexpected: %v", v, output, expected)
		}
	}

}
