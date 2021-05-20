# mt-vector-layer

Maptalks VectorLayer

## DEMO
:::demo
```html
<template>
  <div>
    矢量图层 visible {{ show }}
    <mt-button class="m-b-8" @click="show = !show">toggle 矢量图层</mt-button>
    <input type="range" v-model="opacity" min="0" max="1" step="0.1"> {{opacity}}
    <div class="map">
      <mt-map :options="mapOptions" ref="map">
        <mt-tile-layer
          id="tile"
          url-template="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
          :subdomains="['a','b','c','d']"
        ></mt-tile-layer>
        <mt-vector-layer :opacity="parseFloat(opacity)" id="vector" :visible="show">
          <mt-marker :coordinates="[-0.113049, 51.498568]">
            <mt-info-window title="infoWindow">
              <div>info body</div>
            </mt-info-window>
          </mt-marker>
        </mt-vector-layer>
      </mt-map>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: true,
      geometries: null,
      opacity: 1,
      mapOptions: {
        zoom: 12,
        center: [-0.113049, 51.498568],
      }
    }
  },
}
</script>
```
:::

## Props
#### options 支持 mt-vector-layer 除 id geometries 的全部属性
:::warning
属性优先级: defaultProps < options < 实际传入的 props
:::
:::warning
geometries 只响应 immutable 数据
:::
| 属性名         | 描述           | 类型  | 默认值 | 备注 |
| ------------- | ---------------- | --------- | ------- | ----- |
| id | layer id | String \| Number |  | required |
| geometries | 需要添加到 layer 的 geometries | Object \| Array | null | 推荐使用 slot 加入 |
| visible | 图层显隐 | Boolean | true | |
| cssFilter | css 滤镜 | String | null | |
| debug | debug模式 | Boolean | false | |
| enableSimplify | 在图层渲染前是否简化几何元素 | Boolean | true | |
| cursor | 图层的光标样式 | String | default | |
| geometryEvents | 是否监听 geometry 的事件,disable 可以提升性能 | Boolean | true | |
| defaultIconSize | marker 默认大小 | Array | [20, 20] | |
| enableAltitude | 是否启用几何体高度 | Boolean | false | |
| altitudeProperty | 高度字段 | String | altitude | |
| drawAltitude | 是否绘制高度 | Boolean | false | |
| altitude | 高度 | Number | 0 | |
| drawImmediate | 是否立即绘制 | Boolean | false | |
| attribution | layer attribution | String | null |  |
| minZoom | 最小缩放 | Number | null | maptalks文档为 -1, 但是目前 -1 会导致地图不显示,故代码默认为null |
| maxZoom | 最大缩放 | Number | null | maptalks文档为 -1, 但是目前 -1 会导致地图不显示,故代码默认为null |
| opacity | 图层透明度 | Number | 1 |  |
| zIndex  | 图层层级 | Number | null | |
| hitDetect | - | Boolean | true | |
| globalCompositeOperation | - | String | null | |
| debugOutline | debug 模式边框颜色 | String | '#0f0' | |
| forceRenderOnMoving | 在移动中是否渲染地图 | Boolean | false | |
| forceRenderOnZooming | 在缩放中是否渲染地图 | Boolean | false | |
| forceRenderOnRotating | 在旋转中是否渲染地图 | Boolean | false | |
| options | layer 属性 | Object | {} | 除ID之外的layer options |

## Events
| 事件名 | 参数 | 说明  |
| ------- | --------- | ---------------- |
| ready | layer, mapInstance | 图层已准备好,可以获取图层实例 |

## Methods
| 方法名 | 参数 | 返回值 | 说明  |
| ------- | --------- | --------- |---------------- |
| getLayer | - | layer | 获取图层实例 |
| getMap | - | map | 获取地图实例 |

## slots
| slot名字 | 说明 |
| ------- | --------- |
| default | layer子元素, eg: c-marker, c-circle |
