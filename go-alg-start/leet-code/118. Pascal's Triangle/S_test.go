package main

import (
	"reflect"
	"testing"
)

func Test_Alg(t *testing.T) {
	var inputs = []int{
		3, 5,
	}
	var outputs = [][][]int{
		[][]int{
			[]int{1},
			[]int{1, 1},
			[]int{1, 2, 1},
		},
		[][]int{
			[]int{1},
			[]int{1, 1},
			[]int{1, 2, 1},
			[]int{1, 3, 3, 1},
			[]int{1, 4, 6, 4, 1},
		},
	}
	for i, v := range inputs {
		output := generate(v)
		expected := outputs[i]
		if !checkRight(output, expected) {
			t.Fatalf("input: %v\noutput: %v\nexpected: %v", v, output, expected)
		}
	}

}

func checkRight(a interface{}, b interface{}) bool {
	return reflect.DeepEqual(a, b)
}
