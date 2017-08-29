function blur(cfg) {
  var src = cfg.src
  var deviation = cfg.deviation || '3'
  var width = cfg.width
  var height = cfg.height

  var NS = "http://www.w3.org/2000/svg"

  var svg = document.createElementNS(NS, "svg")
  svg.setAttribute('overflow', 'hidden')
  svg.setAttribute('width', width)
  svg.setAttribute('height', height)

  var defs = document.createElementNS(NS, 'defs')

  var filter = document.createElementNS(NS, "filter")
  filter.setAttribute('id', 'blur')
  filter.setAttribute('x', '-5%')
  filter.setAttribute('y', '-5%')
  filter.setAttribute('width', '110%')
  filter.setAttribute('height', '110%')

  var feGaussianBlur = document.createElementNS(NS, "feGaussianBlur")
  feGaussianBlur.setAttributeNS(NS, 'stdDeviation', deviation)

  var image = document.createElementNS(NS, "image")
  image.setAttributeNS(NS, 'xlink:href', src)
  image.setAttribute('filter', 'url(#blur)')
  image.setAttribute('width', width)
  image.setAttribute('height', height)

  filter.appendChild(feGaussianBlur)
  defs.appendChild(filter)
  svg.appendChild(defs)
  svg.appendChild(image)

  return svg
}

function imgSvg(cfg) {
  var src = cfg.src
  var deviation = cfg.deviation || '3'
  var width = cfg.width
  var height = cfg.height

  var NS = "http://www.w3.org/2000/svg"

  var svg = document.createElementNS(NS, "svg")
  svg.setAttribute('overflow', 'hidden')
  svg.setAttribute('width', width)
  svg.setAttribute('height', height)

  var image = document.createElementNS(NS, "image")
  image.setAttributeNS(NS, 'xlink:href', src)
  image.setAttribute('filter', 'url(#blur)')
  image.setAttribute('width', width)
  image.setAttribute('height', height)

  svg.appendChild(image)

  return svg
}
window.onload = function() {
  setTimeout(function() {
    var dom = document.getElementById('ie10p')
    var svg = imgSvg({
      width: '200px',
      height: '200px',
      src: './avatar.png'
    })
    dom.appendChild(svg)
  }, 300)
}