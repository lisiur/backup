const log = console.log
function* helloWordGenerator() {
  yield 'hello'
  yield 'world'
}

var hw = helloWordGenerator()
log(hw.next())
log(hw.next())
log(hw.next())
log(hw.next())

function generatorWrapper(cb) {
  let states = []
  let curIndex = 0
  let it = {
    addState(state) {
      states.push({value: state, done: false})
    },
  }
  let finalState = cb(it)
  states.push({value: finalState, done: true})

  return {
    next() {
      if (curIndex > states.length-1) {
        return {value: undefined, done: true}
      } else {
        return states[curIndex++]
      }
    }
  }
}

let my = generatorWrapper(it => {
  it.addState('hello')
  it.addState('world')
})

log(my.next())
log(my.next())
log(my.next())
log(my.next())