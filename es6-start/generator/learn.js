const log = console.log
function* helloWordGenerator() {
  yield 'hello'
  yield 'world'
}

function generatorWrapper(cb) {
  let states = []
  let curIndex = 0
  let currentArg = undefined
  let it = {
    yield(state) {
      states.push({value: state, done: false})
    },
  }
  let finalState = cb(it)
  states.push({value: finalState, done: true})

  return {
    next(arg) {
      currentArg = arg
      if (curIndex > states.length-1) {
        return {value: undefined, done: true}
      } else {
        return states[curIndex++]
      }
    }
  }
}

let my = generatorWrapper(it => {
  it.yield('hello')
  it.yield('world')
})

let my2 = generatorWrapper(it => {
  for (let i = 0; i < 3; i++) {
    let reset = it.yield(i)
    if (reset) { i = -1 }
  }
})
function* f() {
  for(var i = 0; true; i++) {
    var reset = yield i;
    if(reset) { i = -1; }
  }
}

function* numbers(start, end) {
  for (let i = start; i <= end; i++) {
    yield i
  }
}
log([...numbers(1,8)])
log(Array.from(numbers(1,8)))