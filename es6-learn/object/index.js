import AUtils from 'awesome-utils'
let obj = {
  prop: "init prop"
}
AUtils.whoTouchedMyProp(obj, 'prop')

;(function (o) {
  o.prop = "change prop"
})(obj)
