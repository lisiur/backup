package main

import (
	"reflect"
	"testing"
)

var inputs = [][][]int{
	[][]int{
		[]int{1, 1, 1},
		[]int{1, 0, 1},
		[]int{1, 1, 1},
	},
}
var expected = [][][]int{
	[][]int{
		[]int{0, 0, 0},
		[]int{0, 0, 0},
		[]int{0, 0, 0},
	},
}

func Test_Alg(t *testing.T) {
	for i := 0; i < len(inputs); i++ {
		output := alg(inputs[i])
		if !isSame(output, expected[i]) {
			t.Fatalf("expected: %v, output: %v", expected[i], output)
		}
	}
}

func isSame(a interface{}, b interface{}) bool {
	return reflect.DeepEqual(a, b)
}
