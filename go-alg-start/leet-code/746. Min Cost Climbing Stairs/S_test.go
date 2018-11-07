package main

import (
	"reflect"
	"testing"
)

func Test_Alg(t *testing.T) {
	var inputs = [][]int{
		[]int{
			10, 15, 20,
		},
		[]int{
			1, 100, 1, 1, 1, 100, 1, 1, 100, 1,
		},
		[]int{
			1, 2, 3, 1, 5, 6, 1,
		},
		[]int{
			0, 0, 1, 1,
		},
	}
	var outputs = []int{
		15, 6, 9, 1,
	}
	for i, v := range inputs {
		output := minCostClimbingStairs2(v)
		expected := outputs[i]
		if !checkRight(output, expected) {
			t.Fatalf("input: %v\noutput: %v\nexpected: %v", v, output, expected)
		}
	}

}

func checkRight(a interface{}, b interface{}) bool {
	return reflect.DeepEqual(a, b)
}
