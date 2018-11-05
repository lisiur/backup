package main

import (
	"reflect"
	"testing"
)

func Test_Alg(t *testing.T) {
	var inputs = []string{
		"abbxxxxzzy",
		"abc",
		"abcdddeeeeaabbbcd",
		"aaa",
	}
	var outputs = [][][]int{
		[][]int{
			[]int{3, 6},
		},
		[][]int{},
		[][]int{
			[]int{
				3, 5,
			},
			[]int{
				6, 9,
			},
			[]int{
				12, 14,
			},
		},
		[][]int{
			[]int{0, 2},
		},
	}
	for i, v := range inputs {
		output := alg(v)
		expected := outputs[i]
		if !checkRight(output, expected) {
			t.Fatalf("input: %v\noutput: %v\nexpected: %v", v, output, expected)
		}
	}

}

func checkRight(a interface{}, b interface{}) bool {
	return reflect.DeepEqual(a, b)
}
