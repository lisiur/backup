package multreturn

func MultReturn(a int) (int, int) {
	return a, a + 1
}

func MultReturn2(a int) (pre int, next int) {
	pre = a
	next = a + 1
	return
}
