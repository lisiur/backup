let obj = new Proxy({}, {
  get: (target, key, receiver) => {
    console.log(`getting ${key}!`)
    return Reflect.get(target, key, receiver)
  },
  set: (target, key, value, receiver) => {
    console.log(`setting ${key}!`)
    return Reflect.set(target, key, value, receiver)
  }
})

obj.count = 1
++ obj.count

function createArray(...elements) {
  let handler = {
    get (target, propKey, receiver) {
      let index = Number(propKey)
      if (index < 0) {
        propKey = String(target.length + index)
      }
      return Reflect.get(target, propKey, receiver)
    },
  }

  let target = []
  target.push(...elements)
  return new Proxy(target, handler)
}

let arr = createArray('a', 'b', 'c')
console.log(arr[-1])
