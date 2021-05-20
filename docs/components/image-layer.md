# mt-image-layer

Maptalks ImageLayer

:::warning
mt-image-layer id 需要 unique
:::

## Demo
:::demo
```html
<template>
  <div>
    <mt-button class="m-b-8" @click="show = !show">toggle 图片图层{{ show }}</mt-button>
    <div class="map">
      <mt-map :options="mapOptions">
        <mt-tile-layer
          id="tile"
          url-template="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
          :subdomains="['a','b','c','d']"
        ></mt-tile-layer>

        <mt-image-layer :visible="show" id="image" :images="images"></mt-image-layer>
      </mt-map>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: true,
      mapOptions: {
        zoom: 14,
        center: [-0.09270712, 51.50615],
      },
      images: [
        {
          url : '/1.png',
          extent: [-0.11854216406254636, 51.50043810048564, -0.09081885168461667, 51.50994770979011],
          opacity : 1
        },
        {
          url : '/2.png',
          extent: [-0.10343596289067136, 51.50797115663946, -0.07897421667485105, 51.51876102463089],
          opacity : 1
        }
      ]
    }
  }
}
</script>
```
:::

## Props
#### options 支持 mt-image-layer 除 id, images 的全部属性
:::warning
属性优先级: defaultProps < options < 实际传入的 props
:::
| 属性名         | 描述           | 类型  | 默认值 | 备注 |
| ------------- | ---------------- | --------- | ------- | ----- |
| id | layer id | String \| Number |  | required |
| images | 图片 | Array | null |  |
| crossOrigin | - | String | null |  |
| attribution | layer attribution | String | null |  |
| minZoom | 最小缩放 | Number | null | maptalks文档为 -1, 但是目前 -1 会导致地图不显示,故代码默认为null |
| maxZoom | 最大缩放 | Number | null | maptalks文档为 -1, 但是目前 -1 会导致地图不显示,故代码默认为null |
| visible | 图层显隐 | Boolean | true | |
| opacity | 图层透明度 | Number | 1 |  |
| zIndex  | 图层层级 | Number | null | |
| hitDetect | - | Boolean | true | |
| renderer | 渲染引擎 | String | gl | canvas 不支持倾斜 |
| globalCompositeOperation | - | String | null | |
| debugOutline | debug 模式边框颜色 | String | '#0f0' | |
| cssFilter | css 滤镜 | String | null | |
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
