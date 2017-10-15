function promisify(fn) {
  return function argsProxy(...args) {
    return new Promise((resolve, reject) => {
      fn(...args, (err, res) => {
        err ? reject(err) : resolve(res)
      })
    })
  }
}

module.exports = promisify