let a = Symbol('foo')
let b = Symbol('foo')
let c = Symbol.for('foo')
let d = Symbol.for('foo')
let fun = () => {}

console.log(a===b,a===c, b===c, c===d)