let common_var = 'common-var'

let common_function = id => id

function add(x, y) {
	return x + y
}

export { common_var, common_function, add }

export function dec(x, y) {
	return x - y
}

export default common_function
