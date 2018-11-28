package alg

import (
	"reflect"
	"testing"
)

func Test_Alg(t *testing.T) {
	var inputs = [][]int{
		[]int{1, 0, 1, 1},
		[]int{1, 2, 3, 1},
		[]int{1, 2, 3, 1, 2, 3},
	}
	var inputs2 = []int{
		1, 3, 2,
	}
	var outputs = []bool{
		true, true, false,
	}
	for i, v := range inputs {
		output := containsNearbyDuplicate(v, inputs2[i])
		expected := outputs[i]
		if !checkRight(output, expected) {
			t.Fatalf("input: %v\noutput: %v\nexpected: %v", v, output, expected)
		}
	}

}

func checkRight(a interface{}, b interface{}) bool {
	return reflect.DeepEqual(a, b)
}
