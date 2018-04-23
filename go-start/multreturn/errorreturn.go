package multreturn

import (
	"math"
)

func MySqrt(a float64) (float64, bool) {
	return math.Sqrt(a), a < 0
}

func MySqrt2(a float64) (rst float64, err bool) {
	rst = math.Sqrt(a)
	err = a < 0
	return
}
