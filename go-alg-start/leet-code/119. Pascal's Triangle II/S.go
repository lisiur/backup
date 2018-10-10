package main

import "fmt"

func getRow(rowIndex int) []int {
	var row = make([]int, rowIndex+1)
	row[0] = 1
	for i := 1; i < rowIndex+1; i++ {
		fmt.Println(row)
		for j := i; j > 0; j-- {
			row[j] += row[j-1]
		}
	}
	return row
}

func getRow2(rowIndex int) []int {
	res := []int{}
	ch := 1
	for i := 0; i <= rowIndex; i++ {
		res = append(res, ch)
		ch = ch * (rowIndex - i) / (i + 1)
	}
	return res
}

func sliceAdd(a []int, b []int) []int {
	rst := []int{}
	for i := 0; i < len(a); i++ {
		rst = append(rst, a[i]+b[i])
	}
	return rst
}
func getRow3(rowIndex int) []int {
	row := []int{1}
	for i := 0; i < rowIndex; i++ {
		row = sliceAdd(
			append([]int{0}, row...),
			append(row, 0),
		)
	}
	return row
}

func main() {
	fmt.Println(getRow3(6))
}
