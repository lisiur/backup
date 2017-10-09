function unary(fn) {
  return function onlyOneArg(arg) {
    return fn(arg)
  }
}

module.exports = unary