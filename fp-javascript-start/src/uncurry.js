function uncurry() {
  return function uncurried(...args) {
    let ret = fn
    for (let i = 0; i < args.length; i++) {
      ret = ret(args[i])
    }
    return ret
  } 
}

module.exports = uncurry