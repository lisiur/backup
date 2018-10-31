package main

import (
	"reflect"
	"testing"
)

var inputs = [][]int{
	[]int{7, 1, 5, 3, 6, 4},
	[]int{6, 5, 4, 3, 2, 1},
}
var expected = []int{
	5, 0,
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
