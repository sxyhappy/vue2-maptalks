# mt-map

Maptalks Map

:::warning
所有组件的父组件,如果其他组件不在 map 容器之下,会报错
:::

## Demo
:::demo
```html
<template>
  <div class="p-b-8">
    center: {{center}} zoom: {{ zoom }}
    <mt-button @click="center = [115.70, 40.40]">设置中心 [115.70, 40.40]</mt-button>
    <mt-button @click="zoom = 11">设置缩放级别 11</mt-button>
  </div>
  <div class="map">
    <mt-map :zoom.sync="zoom" :center.sync="center" :options="mapOptions" @click="handleMapClick">
      <mt-tile-layer
        id="tile"
        url-template="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
        :subdomains="['a','b','c','d']"
      ></mt-tile-layer>
    </mt-map>
  </div>
</template>
<script>
export default {
  data() {
    return {
      zoom: 12,
      center: [-0.113049,51.498568],
      mapOptions: {
        minZoom: 10,
        maxZoom: 20,
        attribution: false,
        maxPitch: 0,
        pitch: 0,
        dragPitch: false,
        dragRotate: false,
      },
    }
  },
  methods: {
    handleMapClick(event) {
      console.log(event)
    }
  },
}
</script>
```
:::

## Props
#### options 支持 mt-map 的全部属性
:::warning
属性优先级: defaultProps < options < 实际传入的 props
:::
| 属性名         | 描述           | 类型  | 默认值 | 备注 |
| ------------- | ---------------- | --------- | ------- | ----- |
| center | 地图中心 | object \| array | [0, 0] | 支持 .sync 修饰符 |
| zoom | 缩放级别 | Number | 0 | 支持 .sync 修饰符 |
| baseLayer | layer | Object | null | overview 依赖baseLayer |
| minZoom | 最小缩放级别 | Number | null ||
| maxZoom | 最大缩放级别 | Number | null ||
| spatialReference | 地图的坐标系 | Object | null | maptalks 默认采用 EPSG:3857 |
| maxExtent | 地图边界 | object | null | |
| centerCross | 地图是否显示红x | boolean | false | |
| seamlessZoom | 是否使用无缝缩放模式 | boolean | false | |
| zoomInCenter | 缩放时是否固定在中央 | boolean | false | |
| zoomOrigin | 缩放容器点中的原点 | Array | null | |
| zoomAnimation | 是否启用缩放动画 | boolean | false | |
| zoomAnimationDuration | 缩放动画持续时间 | Number | 330 | |
| panAnimation | 是否启用平移动画 | Boolean | true | |
| panAnimationDuration | 平移动画持续时长 | Number | 600 | |
| zoomable | 是否启用地图缩放 | Boolean | true | |
| enableInfoWindow | 是否启用InfoWindow | Boolean | true | |
| hitDetect | - | Boolean | true | |
| hitDetectLimit |	- | Number | 5 | |
| fpsOnInteracting |	- | Number | 25 | |
| layerCanvasLimitOnInteracting |	- | Number | -1 | |
| fixCenterOnResize |	当地图缩放时地图中心是否固定 | Boolean | true | |
| maxPitch | 最大角度 | Number | 80 | |
| maxVisualPitch | 视觉最大角度 | Number | 70 | |
| viewHistory | 视图历史 | Boolean | true | |
| viewHistoryCount | 视图历史数量 | Number | 10 | |
| draggable | 地图是否拖拽 | Boolean | true | |
| dragPan | 地图是否拖拽平移 | Boolean | true | |
| dragRotate | 地图是否拖拽旋转 | Boolean | true | 右键/左键+left |
| dragPitch | 地图是否拖拽倾斜 | Boolean | true | 右键/左键+left |
| dragRotatePitch | 地图是否拖拽旋转倾斜 | Boolean | true | |
| touchGesture | 支持手势 | Boolean | true | |
| touchZoom | 支持手势缩放 | Boolean | true | |
| touchRotate | 支持手势旋转 | Boolean | true | |
| touchPitch | 支持手势倾斜 | Boolean | true | |
| touchZoomRotate | 支持手势缩放旋转 | Boolean | true | |
| doubleClickZoom | 双击缩放 | Boolean | true | |
| scrollWheelZoom | 滚轮缩放 | Boolean | true | |
| geometryEvents | geometry 事件 | Boolean | true | |
| control | control ui | Boolean | true | |
| attribution | control ui | Object \| Boolean | true | |
| zoomControl | control ui | Object \| Boolean | false | |
| scaleControl | control ui | Object \| Boolean | false | |
| overviewControl | control ui | Object \| Boolean | false | |
| fog | - | Boolean | true | |
| fogColor | - | Array | [233, 233, 233] | |
| renderer | 地图渲染引擎 | String | canvas | |
| devicePixelRatio | 设备像素比率用来覆盖设备的默认像素比率 | Number | null | |
| options | map 属性 | Object | {} | |

## Events
| 事件名 | 参数 | 说明  |
| ------- | --------- | ---------------- |
| ready | mapInstance | 地图已准备好,可以获取地图实例 |
| update:center | center | 地图中心变化 |
| update:zoom | zoom | 地图缩放变化 |

## Methods
| 方法名 | 参数 | 返回值 | 说明  |
| ------- | --------- | --------- |---------------- |
| getMap | - | map | 获取地图实例 |

## Slot
| slot名字 | 说明 |
| ------- | --------- |
| default | - |


<script>
import DisMap from "../.vuepress/components/DisMap";

export default {
    
components: {DisMap}

}
</script>
