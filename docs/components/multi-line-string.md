# mt-multi-line-string

Maptalks MultiLineString

## Demo
:::demo

```html

<div>
  <div class="map">
    <mt-map :zoom="16" :center="[121.5289450479131, 31.2420083925986]">
      <mt-tile-layer
        id="tile"
        url-template="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
        :subdomains="['a','b','c','d']"
      ></mt-tile-layer>
      <mt-vector-layer id="vector">
        <mt-multi-line-string :coordinates="coordinates" cursor="pointer" :symbol="symbol" draggable="true"></mt-multi-line-string>
      </mt-vector-layer>
    </mt-map>
  </div>
</div>

<script>
export default {
  data() {
    return {
      symbol: {
        'lineColor' : '#000000',
        'lineWidth' : 5,
        'lineOpacity' : 1
      },
      coordinates: [
        [
          [121.5289450479131, 31.2420083925986],
          [121.52860172515919, 31.238926401171824]
        ],
        [
          [121.53091915374796, 31.241898323208233],
          [121.53104789978069, 31.23859618183896]
        ],
        [
          [121.5324641061405, 31.241898323208233],
          [121.53242119079626, 31.239146546752256]
        ]
      ]
    }
  }
}
</script>
```
:::

## Props
#### options 支持 mt-multi-line-string 除 coordinates 的全部属性
:::warning
属性优先级: defaultProps < options < 实际传入的 props
:::
| 属性名         | 描述           | 类型  | 默认值 | 备注 |
| ------------- | ---------------- | --------- | ------- | ----- |
| coordinates | geometry 坐标 | Array |  | required |
| symbol | 路径 symbol | Object | null |  |
| id | geometry id | String \| Number | null |  |
| visible | geometry 显隐 | Boolean | true | |
| editable | geometry 是否可编辑 | Boolean | true | |
| interactive | geometry 是否可交互 | Boolean | true | |
| cursor | geometry 鼠标进入样式 | String | null | |
| measure | geometry 测量方式 | String | EPSG:4326 | |
| draggable | geometry 是否可拖动 | String | false | 字符串boolean |
| dragShadow | geometry 拖动时是否显示阴影 | Boolean | true | |
| dragOnAxis  | geometry 拖动方向 | Boolean | null | |
| zIndex  | geometry zIndex | Number | null | |
| options  | geometry options | Object | {} | |


## Events
| 事件名 | 参数 | 说明  |
| ------- | --------- | ---------------- |
| ready | marker, layer, mapInstance | geometry已准备好,可以获取图层实例 |

## Methods
| 方法名 | 参数 | 返回值 | 说明  |
| ------- | --------- | --------- |---------------- |
| getLayer | - | layer | 获取图层实例 |
| getMap | - | map | 获取地图实例 |
| getGeometry | - | geometry | 获取geometry实例 |

## slots
| slot名字 | 说明 |
| ------- | --------- |
