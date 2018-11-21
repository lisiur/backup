package alg

import (
	"reflect"
	"testing"
)

func Test_Alg(t *testing.T) {
	var inputs = [][]int{
		[]int{1, 1, 2},
		[]int{0, 0, 1, 1, 1, 2, 2, 3, 3, 4},
	}
	var outputs = []int{
		2, 5,
	}
	for i, v := range inputs {
		var output = removeDuplicates(inputs[i])
		var expected = outputs[i]
		if !reflect.DeepEqual(output, expected) {
			t.Fatalf("input: %v\noutput: %v\nexpected: %v", v, output, expected)
		}
	}
}
