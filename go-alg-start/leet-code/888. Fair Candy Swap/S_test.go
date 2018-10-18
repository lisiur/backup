package main

import (
	"testing"
)

func Test_Alg(t *testing.T) {
	var inputs = [][][]int{
		[][]int{
			[]int{1, 1},
			[]int{2, 2},
		},
		[][]int{
			[]int{1, 2},
			[]int{2, 3},
		},
		[][]int{
			[]int{2},
			[]int{1, 3},
		},
		[][]int{
			[]int{1, 2, 5},
			[]int{2, 4},
		},
	}
	var outputs = [][]int{
		[]int{1, 2},
		[]int{1, 2},
		[]int{2, 3},
		[]int{5, 4},
	}
	for i, v := range inputs {
		output := fairCandySwap(inputs[i][0], inputs[i][1])
		expected := outputs[i]
		if !checkRight(output, expected) {
			t.Fatalf("input: %v\noutput: %v\nexpected: %v", v, output, expected)
		}
	}

}

func checkRight(C []int, D []int) bool {
	return C[0]-C[1] == D[0]-D[1]
}
