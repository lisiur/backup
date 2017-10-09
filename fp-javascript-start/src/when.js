// when :: (args -> Bool)
function when(predicate, fn) {
  return function conditional(...args) {
    if (predicate(...args)) {
      return fn(...args)
    }
  }
}

module.exports = when