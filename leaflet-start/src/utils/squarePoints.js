const { asin, sin, cos, acos, sqrt, atan, pow, PI } = Math
const rad2deg = function(radians) {
  return (radians * 180) / Math.PI
}
const deg2rad = function(degrees) {
  return (degrees * Math.PI) / 180
}

function squarePoints([lng, lat], distance = 0.1) {
  const EARTH_RADIUS = 6371.393

  const theta = distance / EARTH_RADIUS
  const lngRad = deg2rad(lng)
  const latRad = deg2rad(lat)

  const lngVal = cos(theta) - sin(latRad) * sin(latRad)
  const lngThetaVal = lngVal / (cos(latRad) * cos(latRad))
  const lngLeftDeg = (-acos(lngThetaVal) + lngRad) / (PI / 180)
  const lngRightDeg = (acos(lngThetaVal) + lngRad) / (PI / 180)

  const a = sin(latRad)
  const b = cos(latRad) * cos(0)
  const sqrtVal = sqrt(pow(a, 2) + pow(b, 2))
  const latThetaVal = cos(theta) / sqrtVal
  const latTopDeg = (asin(latThetaVal) - atan(b/a)) / (PI / 180)
  const latBottomDeg = (asin(-latThetaVal) - atan(b/a)) / (PI / 180)

  return [
    [lngLeftDeg, latTopDeg],
    [lngRightDeg, latTopDeg],
    [lngRightDeg, latBottomDeg],
    [lngLeftDeg, latBottomDeg],
  ]
}

window.Utils = Object.assign({}, window.Utils, {
  squarePoints
})
