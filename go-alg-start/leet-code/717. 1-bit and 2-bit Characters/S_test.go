package main

import (
	"testing"
)

func Test_Alg(t *testing.T) {
	var (
		inputs = [][]int{
			[]int{1, 0, 0},
			[]int{1, 1, 1, 0},
		}

		outputs = []bool{
			true, false,
		}
	)
	for i, v := range inputs {
		output := alg(inputs[i])
		expected := outputs[i]
		if !checkRight(output, expected) {
			t.Fatalf("input: %v\noutput: %v\nexpected: %v", v, output, expected)
		}
	}

}

func checkRight(C bool, D bool) bool {
	return C == D
}
