# mt-polygon

Maptalks Polygon

## Demo
:::demo
```html
<div>
  <div class="m-b-8">
    <mt-button @click="visible = !visible">toggle visible</mt-button>
    <mt-button @click="changeCoordinates">change coordinates</mt-button>
  </div>
  <div class="map">
    <mt-map :zoom="12" :center="[121.48053653961283, 31.24244899384889]">
      <mt-tile-layer
        id="tile"
        url-template="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
        :subdomains="['a','b','c','d']"
      ></mt-tile-layer>
      <mt-vector-layer id="vector">
        <mt-polygon :visible="visible" :coordinates="coordinates" cursor="pointer" draggable>
          <mt-info-window title="infoTitle">
            <div class="m-b-8">当前时间: {{ time }}</div>
            
            <mt-button @click="handleClick">info 事件</mt-button>
          </mt-info-window>
        </mt-polygon>
      </mt-vector-layer>
    </mt-map>
  </div>
</div>

<script>
export default {
  data() {
    return {
      time: null,
      symbol: null,
      visible: true,
      coordinates: [
        [
          [121.48053653961283, 31.24244899384889],
          [121.48049362426856, 31.238559229494186],
          [121.49032123809872, 31.236210614999653],
          [121.49366863494917, 31.242926029397037],
          [121.48577221160967, 31.243880093267567],
          [121.48053653961283, 31.24244899384889]
        ]
      ]
    }
  },
  methods: {
    handleClick() {
      window.alert('info 点击了')
    },
    changeCoordinates() {
        this.coordinates = [
          [121.4805365, 31.24244899384889],
          [121.4504936, 31.218559229494186],
          [121.4903212, 31.236210614999653],
          [121.4936686, 31.242926029397037],
          [121.4857722, 31.243880093267567],
          [121.4805365, 31.24244899384889]
        ]
    }
  },
  mounted() {
    setInterval(() => {
      const date = new Date();
      this.time = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDay()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    }, 1000)
  }
}
</script>
```
:::

## Props
#### options 支持 mt-polygon 除 coordinates 的全部属性
:::warning
属性优先级: defaultProps < options < 实际传入的 props
:::
| 属性名         | 描述           | 类型  | 默认值 | 备注 |
| ------------- | ---------------- | --------- | ------- | ----- |
| coordinates | geometry 坐标 | Array |  | required |
| smoothness | 线平滑处理 | Number | 0 |  |
| enableSimplify | 渲染前是否简化路径 | Boolean | true |  |
| simplifyTolerance | 简化路径程度 | Number | 2 |  |
| simplifyTolerance | 简化路径程度 | Number | 2 |  |
| enableClip | 是否根据当前地图范围裁剪路径 | Boolean | true |  |
| enableClip | 是否根据当前地图范围裁剪路径 | Boolean | true |  |
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
| default | geometry子元素, eg: c-info-window |
