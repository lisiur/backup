Object.defineProperty(Object.prototype, "log", {
  value: function() {console.log(this)}
})
Object.defineProperty(Map.prototype, "log", {
  value: function() {console.log(this)}
})
let objKey = {
  name: 'key',
  version: 0
}
let objKey2 = {
  name: 'key',
  version: 0
}
const map = new Map([
  [objKey, 'Author']
])
map.get(objKey2).log()