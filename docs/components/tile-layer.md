# mt-tile-layer
Maptalks TileLayer

:::warning
mt-tile-layer id 需要 unique 
:::

## Demo
:::demo
```html
<div>
  Boudaries visible {{ isBoudariesShow }}<mt-button class="m-b-8" @click="isBoudariesShow = !isBoudariesShow">toggle boudaries</mt-button>
  <div class="map">
    <mt-map :options="mapOptions">
      <mt-tile-layer
        id="base"
        url-template="https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}.png"
        :subdomains="['a','b','c','d']"
      ></mt-tile-layer>
      <mt-tile-layer
        :visible="isBoudariesShow"
        id="boudaries"
        url-template="https://{s}.basemaps.cartocdn.com/dark_only_labels/{z}/{x}/{y}.png"
        :subdomains="['a','b','c','d']"
      ></mt-tile-layer>
    </mt-map>
  </div>
</div>

<script>
export default {
  data() {
    return {
      isBoudariesShow: true,
      mapOptions: {
        zoom: 12,
        center: [-0.113049,51.498568],
      }
    }
  }
}
</script>
```
:::

## Props
#### options 支持 mt-title-layer 除 id 的全部属性
:::warning
属性优先级: defaultProps < options < 实际传入的 props
:::
| 属性名         | 描述           | 类型  | 默认值 | 备注 |
| ------------- | ---------------- | --------- | ------- | ----- |
| id | layer id | String \| Number |  | required |
| urlTemplate | 瓦片图层地址 | String \| Function |  | required |
| visible | 图层显隐 | Boolean | true | |
| subdomains | urlTemplate 子域名 | Array | null | |
| cssFilter | css 滤镜 | String | null | |
| zIndex  | 图层层级 | Number | null | |
| spatialReference | 图层空间坐标 | Object | null | |
| tileSize | 瓦片大小 | Object | [256, 256] | |
| offset | 瓦片偏移 | Array | [0, 0] | |
| tileSystem | 瓦片系统数组编号 | Array | null | |
| maxAvailableZoom | 瓦片可用的最大缩放数 | Number | null | |
| repeatWorld | 瓦片是否重复 | Boolean | true | |
| background | 在交互中绘制还是在交互之后绘制地图 | Boolean | true | |
| backgroundZoomDiff | - | Number | 6 | |
| placeholder | 加载地图过程中的 loading 占位符 | Boolean \| Function | null | |
| fragmentShader | 自定义片段着色器 | String | null | |
| crossOrigin | - | String | null | |
| fadeAnimation | 加载地图时的淡入淡出动画 | Boolean | true | |
| debug  | debug模式 | Boolean | false | |
| renderer | 渲染引擎 | String | gl | canvas 不支持倾斜 |
| maxCacheSize | 最大缓存瓦片数 | Number | 256 |  |
| cascadeTiles | 绘制不同缩放比例的级联图块以减少图块 | Boolean | true |  |
| zoomOffset | 瓦片缩放偏移 | Number | 0 |  |
| opacity | 图层透明度 | Number | 1 |  |
| tileRetryCount | 加载重试次数 | Number | 0 |  |
| attribution | layer attribution | String | null |  |
| minZoom | 最小缩放 | Number | null | maptalks文档为 -1, 但是目前 -1 会导致地图不显示,故代码默认为null |
| maxZoom | 最大缩放 | Number | null | maptalks文档为 -1, 但是目前 -1 会导致地图不显示,故代码默认为null |
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
