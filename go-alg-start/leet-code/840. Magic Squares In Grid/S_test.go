package alg

import (
	"reflect"
	"testing"
)

func Test_Alg(t *testing.T) {
	var inputs = [][][]int{
		[][]int{
			[]int{9, 0, 8, 1, 6},
			[]int{2, 4, 3, 5, 7},
			[]int{4, 3, 4, 9, 2},
			[]int{2, 4, 5, 6, 1},
			[]int{9, 8, 0, 7, 8},
		},
		[][]int{
			[]int{10, 3, 5},
			[]int{1, 6, 11},
			[]int{7, 9, 2},
		},
		[][]int{
			[]int{4, 3, 8, 4},
			[]int{9, 5, 1, 9},
			[]int{2, 7, 6, 2},
		},
	}
	var outputs = []int{
		1,
		0,
		1,
	}
	for i, v := range inputs {
		output := numMagicSquaresInside(v)
		expected := outputs[i]
		if !checkRight(output, expected) {
			t.Fatalf("input: %v\noutput: %v\nexpected: %v", v, output, expected)
		}
	}

}

func checkRight(a interface{}, b interface{}) bool {
	return reflect.DeepEqual(a, b)
}
