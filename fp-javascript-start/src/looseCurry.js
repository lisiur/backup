function looseCurry(fn, arity = fn.length) {
  return (function nextCurried(...prevArgs) {
    return function curried(...nextArgs) {
      const args = prevArgs.concat(nextArgs)
      if (args.length >= arity) {
        return fn(...args)
      } else {
        return nextCurried(args)
      }
    }
  })
}

module.exports = looseCurry