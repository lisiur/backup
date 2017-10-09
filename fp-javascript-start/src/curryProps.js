function curryProps(fn, arity = 1) {
  return (function nextCurried(prevArgsObj) {
    return function curried(nextArgObj = {}) {
      const [key] = Object.keys(nextArgObj)
      const allArgsObj = Object.assign({}, prevArgsObj, {[key]: nextArgObj[key]})
      if (Object.keys(allArgsObj).length >= arity) {
        return fn(allArgsObj)
      } else {
        return nextCurried(allArgsObj)
      }
    }
  })({})
}

module.exports = curryProps