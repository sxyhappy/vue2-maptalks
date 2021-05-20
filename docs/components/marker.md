# mt-marker
Maptalks Marker

:::warning
mt-marker 需要提供一个 mt-vector-layer 父级, 如果需要直接在地图上显示可以使用 MtUMarker
:::

## Demo
:::demo
```html
<div>
  <div class="m-b-8">
    <mt-button @click="changeSymbol">toggle symbol</mt-button>
    <mt-button @click="visible = !visible">toggle visible</mt-button>
    <mt-button @click="coordinates = [115.762, 40.502]">change coordinates</mt-button>
  </div>
  <div class="map">
    <mt-map :zoom="12" :center="[115.76, 40.50]">
      <mt-tile-layer
        id="tile"
        url-template="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
        :subdomains="['a','b','c','d']"
      ></mt-tile-layer>
      <mt-vector-layer id="vector">
        <mt-marker draggable :visible="visible" :coordinates="coordinates" :symbol="symbol" cursor="pointer" draggable="true">
          <mt-info-window title="infoTitle">
            <div class="m-b-8">当前时间: {{ time }}</div>
            
            <mt-button @click="handleClick">info 事件</mt-button>
          </mt-info-window>
        </mt-marker>
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
      coordinates: [115.76, 40.50]
    }
  },
  methods: {
    changeSymbol() {
      if (this.symbol) {
        return this.symbol = null
      }
      this.symbol = {
        'textFaceName' : 'sans-serif',
        'textName' : 'MapTalks',
        'textFill' : '#34495e',
        'textHorizontalAlignment' : 'right',
        'textSize' : 40
      }
    },
    handleClick() {
      window.alert('info 点击了')
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
#### options 支持 mt-marker 除 coordinates 的全部属性
:::warning
属性优先级: defaultProps < options < 实际传入的 props
:::
| 属性名         | 描述           | 类型  | 默认值 | 备注 |
| ------------- | ---------------- | --------- | ------- | ----- |
| coordinates | geometry 坐标 | Array \| Object |  | required |
| symbol | marker symbol | Object | null |  |
| properties | icon properties | Object | null |  |
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
