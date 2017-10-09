function constant(v) {
  return function value() {
    return v
  }
}

module.exports = constant