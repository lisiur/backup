package alg

func numMagicSquaresInside(grid [][]int) int {
	var (
		rows = len(grid)
		cols = len(grid[0])
	)
	var num = 0
	for i := 0; i <= rows-3; i++ {
		for j := 0; j <= cols-3; j++ {
			if isMagicSquare(grid, i, j) {
				num++
			}
		}
	}
	return num
}

func isMagicSquare(grid [][]int, i, j int) bool {
	if grid[i+1][j+1] != 5 {
		return false
	}
	for p := i; p <= i+2; p++ {
		for q := j; q <= j+2; q++ {
			if grid[p][q] > 9 || grid[p][q] < 1 {
				return false
			}
		}
	}
	if grid[i][j]+grid[i+2][j+2] != 10 {
		return false
	}
	if grid[i][j+1]+grid[i+2][j+1] != 10 {
		return false
	}
	if grid[i][j+2]+grid[i+2][j] != 10 {
		return false
	}
	if grid[i+1][j]+grid[i+1][j+2] != 10 {
		return false
	}
	if grid[i][j]+grid[i][j+1]+grid[i][j+2] != 15 {
		return false
	}
	if grid[i][j]+grid[i+1][j]+grid[i+2][j] != 15 {
		return false
	}
	if grid[i][j+2]+grid[i+1][j+2]+grid[i+2][j+2] != 15 {
		return false
	}
	if grid[i+2][j]+grid[i+2][j+1]+grid[i+2][j+2] != 15 {
		return false
	}
	return true
}
