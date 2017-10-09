function words(str) {
  return String(str).split(/\s|\b/)
}

module.exports = words