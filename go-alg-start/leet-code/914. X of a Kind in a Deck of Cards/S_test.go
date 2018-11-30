package alg

import (
	"reflect"
	"testing"
)

func Test_Alg(t *testing.T) {
	var inputs = [][]int{
		[]int{1, 1, 1, 1, 2, 2, 2, 2, 2, 2},
		[]int{1, 1, 1, 2, 2, 2, 3, 3},
		[]int{0, 0, 0, 1, 1, 1, 2, 2, 2},
		[]int{1, 2, 3, 4, 4, 3, 2, 1},
		[]int{1},
		[]int{1, 1},
		[]int{1, 1, 2, 2, 2, 2},
	}
	var outputs = []bool{
		true, false, true, true, false, true, true,
	}
	for i, v := range inputs {
		output := alg(inputs[i])
		expected := outputs[i]
		if !checkRight(output, expected) {
			t.Fatalf("input: %v\noutput: %v\nexpected: %v", v, output, expected)
		}
	}

}

func checkRight(a interface{}, b interface{}) bool {
	return reflect.DeepEqual(a, b)
}
