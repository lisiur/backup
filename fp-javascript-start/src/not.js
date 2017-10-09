function not(predicate) {
  return function negated(...args) {
    return !predicate(...args)
  }
}

module.exports = not