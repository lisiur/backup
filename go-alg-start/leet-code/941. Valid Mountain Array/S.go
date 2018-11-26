package alg

func validMountainArray(A []int) bool {
	if len(A) < 3 {
		return false
	}
	if A[1] <= A[0] {
		return false
	}

	var flag = false
	for i := 1; i < len(A); i++ {
		// up
		if flag == false {
			if A[i] < A[i-1] {
				flag = true
			}
			if A[i] == A[i-1] {
				return false
			}
		} else {
			if A[i] >= A[i-1] {
				return false
			}
		}
	}
	return flag
}
