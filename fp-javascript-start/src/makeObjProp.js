const setProp = require("./setProp")

function makeObjProp(name, value) {
  return setProp(name, {}, value)
}

module.exports = makeObjProp