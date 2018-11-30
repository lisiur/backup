package alg

func alg(deck []int) bool {
	var tmp = make(map[int]int)
	for _, v := range deck {
		if _, e := tmp[v]; e {
			tmp[v]++
		} else {
			tmp[v] = 1
		}
	}
	var base = 1
	for _, v := range tmp {
		if v == 1 {
			return false
		}
		if v < base {
			if base%v != 0 {
				return false
			}
			base = v
		}
		if v > base {
			if base == 1 {
				base = v
				continue
			}
			if v%base != 0 {
				return false
			}
		}
	}
	return true
}
