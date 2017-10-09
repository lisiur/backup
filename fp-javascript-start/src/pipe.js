function pipe(...fns) {
  return function piped(result) {
    const list = fns.slice().reverse()
    while (list.length > 0) {
      result = list.pop()(result)
    }
    return result
  }
}

module.exports = pipe