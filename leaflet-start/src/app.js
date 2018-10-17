var position = new L.LatLng(32.0603, 118.7969)
var renderer = L.canvas({ padding: 0.5 })
var map = L.map('map').setView(position, 13)

L.tileLayer
  .chinaProvider('GaoDe.Normal.Map', { maxZoom: 18, minZoom: 3 })
  .addTo(map)

// // 点
// var marker = L.marker(position).addTo(map)

// // 圈
// var circle = L.circle(position, {
//   color: 'red',
//   fillColor: '#f03',
//   fillOpacity: 0.5,
//   radius: 500
// })

// // 多边形
// var polygon = L.polygon([
//   new L.LatLng(32.0603, 118.7969),
//   new L.LatLng(32.0603, 118.7869),
//   new L.LatLng(32.0703, 118.7869),
//   new L.LatLng(32.0703, 118.7969)
// ]).addTo(map)

// // 绑定 popup
// marker.bindPopup('<b>marker</b><br>I am a popup.') // .openPopup()
// circle.bindPopup('<b>circle</b><br>I am a popup.')
// polygon.bindPopup('<b>polygon</b><br>I am a popup.')

// // 独立 popup
// function showPopup(position, content) {
//   L.popup()
//     .setLatLng(position)
//     .setContent(content)
//     .openOn(map)
// }

// // event
// function onMapClick(e) {
//   console.log(e)
// }
// map.on('click', onMapClick)

// // heat
// var heat = L.heatLayer(
//   [
//     new L.LatLng(32.0603, 118.7869, 0.5),
//     new L.LatLng(32.0603, 118.7869, 0.5),
//     new L.LatLng(32.0603, 118.7869, 0.5),
//     new L.LatLng(32.0603, 118.8869, 0.5),
//     new L.LatLng(32.0603, 118.8869, 0.5),
//     new L.LatLng(32.0603, 118.8869, 0.5)
//   ],
//   {
//     radius: 25
//   }
// ).addTo(map)

// // @ts-ignore
// var markers = L.markerClusterGroup()
// markers.addLayer(L.marker([32.0603, 118.7869]))
// markers.addLayer(L.marker([32.0603, 118.7969]))
// markers.addLayer(L.marker([32.0603, 118.7769]))
// markers.addLayer(L.marker([32.0603, 118.7669]))
// markers.addLayer(L.marker([32.0603, 118.7569]))

// markers.addTo(map)

// var greenIcon = L.icon({
//   iconUrl: './static/images/leaf-green.png',
//   shadowUrl: './static/images/leaf-shadow.png',
//   iconSize: [38, 95],
//   shadowSize: [50, 64],
//   iconAnchor: [22, 94],
//   shadowAnchor: [4, 62],
//   popupAnchor: [-3, -76]
// })

// L.marker([32.0603, 118.8869], { icon: greenIcon, }).addTo(map).bindPopup("I am a green leaf.")

// L.polygon(Utils.squarePoints([32.0603,118.8869])).addTo(map)

var layerGroup = L.featureGroup()
for (let latLng of [[32.0603, 118.7869], [32.0603, 118.788]]) {
  layerGroup
    .addLayer(
      L.rectangle(L.latLng(latLng).toBounds(100), {
        color: '#ff7800',
        weight: 1,
        renderer: renderer
      })
        .bindPopup(L.latLng(latLng).toString(), { closeButton: false })
        .bindTooltip('1', { permanent: true, direction: 'center' })
    )
    .addTo(map)
    .openTooltip()
}
layerGroup.on('mouseover', function(event) {
  event.layer.openPopup()
})
map.on('zoom', function(event) {
  var maxLength = 1
  var rectangle = layerGroup.getLayers()[0]
  if (getRectangleWidth(map, rectangle) < getTooltipMaxWidth(maxLength)) {
    hideTooltip()
  } else {
    showTooltip()
  }
})
function showTooltip() {
  layerGroup.getLayers().forEach(layer => {
    layer.getTooltip().setOpacity(0.9)
  })
}
function hideTooltip() {
  layerGroup.getLayers().forEach(layer => {
    layer.getTooltip().setOpacity(0)
  })
}
function getRectangleWidth(map, rectangle) {
  return (
    map.latLngToLayerPoint(rectangle.getBounds().getNorthEast()).x -
    map.latLngToLayerPoint(rectangle.getBounds().getSouthWest()).x
  )
}
function getTooltipMaxWidth(textLength) {
  return textLength * 12 + 14
}
map.fitBounds(layerGroup.getBounds())
