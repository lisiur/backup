package main

import (
	"testing"
)

func Test_Alg(t *testing.T) {
	var (
		inputs = [][]int{
			[]int{1, 2, 3, 1},
			[]int{1, 2, 3, 4},
			[]int{1, 1, 1, 3, 3, 4, 3, 2, 4, 2},
		}

		outputs = []bool{
			true, false, true,
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
