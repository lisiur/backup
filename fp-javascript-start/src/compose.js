function compose(...fns) {
  return function composed(result) {
    const list = fns.slice()  // copy
    while (list.length > 0) {
      result = list.pop()(result)
    }
    return result
  }
}

function compose2(...fns) {
  return function composed(result) {
    return fns.reverse().reduce(function reducer(result, fn) {
      return fn(result)
    }, result)
  }
}

function compose3(...fns) {
  return fns.reverse().reduce(function reducer(fn1, fn2) {
    return function coposed(...args) {
      return fn2(fn1(...args))
    }
  })
}

function compose4(...fns) {
  const [fn1, fn2, ...rest] = fns.reverse()
  const composedFn = function composed(...args) {
    return fn2(fn1(...args))
  }
  if (rest.length === 0) return composedFn
  return compose4(...rest.reverse(), composedFn)
}

module.exports = compose4 || compose3 || compose2 || compose