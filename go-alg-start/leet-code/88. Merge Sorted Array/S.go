package alg

func alg(nums1 []int, m int, nums2 []int, n int) {
	var i1, i2 = m - 1, n - 1
	for i := m + n - 1; i >= 0; i-- {
		if i1 < 0 {
			nums1[i] = nums2[i2]
			i2--
			continue
		}
		if i2 < 0 {
			nums1[i] = nums1[i1]
			i1--
			continue
		}
		if nums1[i1] >= nums2[i2] {
			nums1[i] = nums1[i1]
			i1--
		} else {
			nums1[i] = nums2[i2]
			i2--
		}
	}
}
