package alg

import (
	"reflect"
	"testing"
)

func Test_Alg(t *testing.T) {
	var inputs = [][]int{
		[]int{1, 2, 3, 0, 0, 0},
	}
	var inputs2 = []int{3}
	var inputs3 = [][]int{
		[]int{2, 5, 6},
	}
	var inputs4 = []int{3}

	var outputs = [][]int{
		[]int{1, 2, 2, 3, 5, 6},
	}
	for i, v := range inputs {
		alg(inputs[i], inputs2[i], inputs3[i], inputs4[i])
		expected := outputs[i]
		if !checkRight(inputs[i], expected) {
			t.Fatalf("input: %v\noutput: %v\nexpected: %v", v, inputs[i], expected)
		}
	}
}

func checkRight(a interface{}, b interface{}) bool {
	return reflect.DeepEqual(a, b)
}
