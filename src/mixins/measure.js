export default {
  props: {
    once: {
      type: Boolean,
      default: null
    },
    language: {
      type: String,
      default: 'zh-CN'
    },
    metric: {
      type: Boolean,
      default: true
    },
    imperial: {
      type: Boolean,
      default: false
    },
    symbol: {
      type: Object,
      default: () => ({
        'lineColor' : '#1bbc9b',
        'lineWidth' : 2,
        'polygonFill' : '#fff',
        'polygonOpacity' : 0.3
      })
    },
    vertexSymbol: {
      type: Object,
      default: () => ({
        markerType: 'ellipse',
        markerFill: '#34495e',
        markerLineColor: '#1bbc9b',
        markerLineWidth: 3,
        markerWidth: 10,
        markerHeight: 10
      })
    },
    labelOptions: {
      type: Object,
      default: () => ({
        textSymbol: {
          textFaceName: 'monospace',
          textFill: '#fff',
          textLineSpacing: 1,
          textHorizontalAlignment: 'right',
          textDx: 15
        },
        boxStyle : {
          padding : [6, 2],
          symbol : {
            markerType : 'square',
            markerFill : '#000',
            markerFillOpacity : 0.9,
            markerLineColor : '#b4b3b3'
          }
        }
      })
    }
  }
}
