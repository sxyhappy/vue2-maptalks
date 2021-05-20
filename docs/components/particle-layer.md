# mt-particle-layer

Maptalks ParticleLayer

:::warning
mt-particle-layer id 需要 unique
:::

## Demo
:::demo

```html
<template>
  <div>
    <div class="map">
      <mt-map :options="mapOptions" ref="map">
        <mt-tile-layer
          id="tile"
          url-template="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
          :subdomains="['a','b','c','d']"
        ></mt-tile-layer>
        <mt-particle-layer id="particle" :getParticles="getParticles"></mt-particle-layer>
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
        zoom: 12,
        center: [115.76, 40.50],
      }
    }
  },
  methods: {
    getParticles(t) {
      const map = this.$refs.map.getMap();
      const center = map.getCenter();
      const radius = 3000;

      const point = map.coordinateToContainerPoint(center);
      const angle = (t / 16 % 360) * Math.PI / 180;
      const pxLen = map.distanceToPixel(radius, radius);
      const r = pxLen.width;
      const x = r * Math.cos(angle), y = r * Math.sin(angle);
      return [
        {
          point : point.add(x, y),
          r : 4,
          color : 'rgb(135,196,240)'
        }
      ];
    }
  },
}
</script>
```
:::

## Props
#### options 支持 mt-particle-layer 除 id 的全部属性
:::warning
属性优先级: defaultProps < options < 实际传入的 props
:::
| 属性名         | 描述           | 类型  | 默认值 | 备注 |
| ------------- | ---------------- | --------- | ------- | ----- |
| id | layer id | String \| Number |  | required |
| animation | 是否为动画图层 | Boolean | true | required |
| doubleBuffer | 是否使用 doubleBuffer 渲染 | Boolean | false |  |
| fps | 动画帧数 | Number | 1000/16 |  |
| getParticles | 粒子动画函数 | Function | () => void |  |
| attribution | layer attribution | String | null |  |
| minZoom | 最小缩放 | Number | null | maptalks文档为 -1, 但是目前 -1 会导致地图不显示,故代码默认为null |
| maxZoom | 最大缩放 | Number | null | maptalks文档为 -1, 但是目前 -1 会导致地图不显示,故代码默认为null |
| visible | 图层显隐 | Boolean | true | |
| opacity | 图层透明度 | Number | 1 |  |
| zIndex  | 图层层级 | Number | null | |
| hitDetect | - | Boolean | true | |
| renderer | 渲染引擎 | String | canvas | |
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
