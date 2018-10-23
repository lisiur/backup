var position = new L.LatLng(32.0603, 118.7969)
var renderer = L.canvas({ padding: 0.5 })
var map = L.map('map').setView(position, 13)

L.tileLayer
  .chinaProvider('GaoDe.Normal.Map', { maxZoom: 18, minZoom: 3 })
  .addTo(map)

var layer = L.layerGroup()

var latlngs = [
  new L.LatLng(32.0603, 118.7969),
  new L.LatLng(32.0603, 118.7869),
  new L.LatLng(32.0703, 118.7869),
  new L.LatLng(32.0703, 118.7969)
]

for (let i = 0; i < latlngs.length; i++) {
  let marker = L.marker(latlngs[i])
  marker.on('click', event => {})
  layer.addLayer(marker)
}
layer.addTo(map)
