function* hellowWorldGenerator() {
  yield 'hello'
  yield 'world'
  return 'ending'
}

let hw = hellowWorldGenerator()
hw.next()
hw.next()
hw.next()
hw.next()
// hw[Symbol.iterator]() === hw

let fib = {}
fib[Symbol.iterator] = function* () {
  let [prev, curr] = [0,1]
  for (;;) {
    [prev, curr] = [curr, prev + curr]
    yield curr
  }
}

for (let n of fib[Symbol.iterator]()) {
  if (n > 20) break
  console.log(n)
}
console.log([...fib])

function* f() {
  for(let i = 0; true; i++) {
    let reset = yield i
    console.log('reset:', reset)
    if(reset) {
      i = -1
    }
  }
}
let g = f()
console.log(g.next())
console.log(g.next())
console.log(g.next(true))

