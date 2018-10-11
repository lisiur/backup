var position = new L.LatLng(32.0603, 118.7969)
var map = L.map('map').setView(position, 13)
L.tileLayer
  .chinaProvider('GaoDe.Normal.Map', { maxZoom: 18, minZoom: 3 })
  .addTo(map)

// 点
var marker = L.marker(position).addTo(map)

// 圈
var circle = L.circle(position, {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 500
}).addTo(map)

// 多边形
var polygon = L.polygon([
  new L.LatLng(32.0603, 118.7969),
  new L.LatLng(32.0703, 118.7969),
  new L.LatLng(32.0603, 118.7869)
]).addTo(map)

// 绑定 popup
marker.bindPopup('<b>marker</b><br>I am a popup.') // .openPopup()
circle.bindPopup('<b>circle</b><br>I am a popup.')
polygon.bindPopup('<b>polygon</b><br>I am a popup.')

// 独立 popup
function showPopup(position, content) {
  L.popup()
    .setLatLng(position)
    .setContent(content)
    .openOn(map)
}

// event
function onMapClick(e) {
  console.log(e)
}
map.on('click', onMapClick)

// heat
var heat = L.heatLayer([
  new L.LatLng(32.0603, 118.7869, 0.5),
  new L.LatLng(32.0603, 118.7869, 0.5),
  new L.LatLng(32.0603, 118.7869, 0.5),
  new L.LatLng(32.0603, 118.8869, 0.5),
  new L.LatLng(32.0603, 118.8869, 0.5),
  new L.LatLng(32.0603, 118.8869, 0.5),
], {
  radius: 25
}).addTo(map)


var markers = L.markerClusterGroup()
markers.addLayer(L.marker([32.0603, 118.7869]))
markers.addLayer(L.marker([32.0603, 118.7969]))
markers.addLayer(L.marker([32.0603, 118.7769]))
markers.addLayer(L.marker([32.0603, 118.7669]))
markers.addLayer(L.marker([32.0603, 118.7569]))

markers.addTo(map)
