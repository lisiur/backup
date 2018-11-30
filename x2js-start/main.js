const convert = require('xml-js')

const styles = {
  StyledLayerDescriptor: {
    NamedLayer: {
      Name: {
        _text: 'workspace_dev:test_sld'
      },
      UserStyle: {
        Title: {
          _text: 'Default Point',
        },
        Abstract: {
          _text: 'A sample style that draws a point',
        },
        FeatureTypeStyle: {
          Rule: {
            PointSymbolizer: {
              Graphic: {
                Mark: {
                  WellKnownName: {
                    _text: 'square',
                  },
                  Fill: {
                    CssParameter: {
                      _attributes: {
                        name: 'fill',
                      },
                      _text: '#009900',
                    }
                  }
                }
              }
            }
          }
        },
      },
    }
  },
}

function makeMarkerStyle(style) {
  const styles = {
    StyledLayerDescriptor: {
      NamedLayer: {
        Name: {
          _text: 'workspace_dev:test_sld'
        },
        UserStyle: {
          Title: {
            _text: 'Default Point',
          },
          Abstract: {
            _text: 'sample style'
          },
          FeatureTypeStyle: {
            Rule: {
              PointSymbolizer: {
                Graphic: {
                  Mark: {
                    WellKnownName: {
                      _text: 'square',
                    },
                    Fill: {
                      CssParameter: {
                        _attributes: {
                          name: fill,
                        },
                        _text: style.fillColor
                      }
                    }
                  }
                }
              }
            }
          }
        },
      }
    }
  }
}
const options = {
  compact: true
}

const xml = convert.js2xml(styles, options)
console.log(xml)