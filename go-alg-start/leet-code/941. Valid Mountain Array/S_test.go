package alg

import (
	"reflect"
	"testing"
)

func Test_Alg(t *testing.T) {
	var inputs = [][]int{
		[]int{2, 1},
		[]int{3, 5, 5},
		[]int{0, 3, 2, 1},
	}
	var outputs = []bool{
		false, false, true,
	}
	for i, v := range inputs {
		output := validMountainArray(inputs[i])
		expected := outputs[i]
		if !checkRight(output, expected) {
			t.Fatalf("input: %v\noutput: %v\nexpected: %v", v, output, expected)
		}
	}

}

func checkRight(a interface{}, b interface{}) bool {
	return reflect.DeepEqual(a, b)
}
