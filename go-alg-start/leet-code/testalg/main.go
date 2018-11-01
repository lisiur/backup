package testalg

import (
	"reflect"
	"testing"
)

// Func .
type Func func(arg ...interface{}) interface{}

// TestFunc .
func TestFunc(t *testing.T, algFunc Func, inputs []interface{}, outputs []interface{}) {
	for i, v := range inputs {
		output := algFunc(v)
		expected := outputs[i]
		if !checkRight(output, expected) {
			t.Fatalf("input: %v\noutput: %v\nexpected: %v", v, output, expected)
		}
	}
}

func checkRight(a interface{}, b interface{}) bool {
	return reflect.DeepEqual(a, b)
}
