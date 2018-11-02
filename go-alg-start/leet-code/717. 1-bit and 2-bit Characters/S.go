package main

func alg(bits []int) bool {
	var i = 0
	for i < len(bits)-1 {
		if bits[i] == 1 {
			i += 2
		} else {
			i++
		}
	}
	return i == len(bits)-1 && bits[i] == 0
}

func main() {
}
