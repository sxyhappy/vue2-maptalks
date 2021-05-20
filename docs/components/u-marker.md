# mt-u-marker

Maptalks ui.UIMarker

## Demo
:::demo

```html
<div>
  <div class="map">
    <mt-map :zoom="12" :center="[115.76, 40.50]">
      <mt-tile-layer
        id="tile"
        url-template="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
        :subdomains="['a','b','c','d']"
      ></mt-tile-layer>
      <mt-u-marker :coordinates="[115.76, 40.50]">
        <div class="marker">
          <div>这是一个marker</div>
          <img src="/marker.png" alt="marker" />
        </div>
      </mt-u-marker>
    </mt-map>
  </div>
</div>

<script>
export default {
  data() {
    return {visible: true}
  }
}
</script>

<style>
.marker {
  text-align: center;
  word-break: keep-all;
}

.marker img {
  width: 60px;
  height: 60px;
}
</style>
```
:::

## Props
#### options 支持 mt-u-marker 的全部属性
:::warning
属性优先级: defaultProps < options < 实际传入的 props
:::
| 属性名         | 描述           | 类型  | 默认值 | 备注 |
| ------------- | ---------------- | --------- | ------- | ----- |
| eventsPropagation | 是否阻止全部事件冒泡 | Boolean | false |  |
| eventsToStop | 是否阻止全部事件冒泡 | Boolean | false |  |
| dx | x轴偏移 | Number | 0 |  |
| dy | y轴便宜 | Number | 0 |  |
| autoPan | - | Boolean | false |  |
| autoPanDuration | - | Boolean | false |  |
| single | 弹窗是否为单例 | Boolean | true |  |
| animation | 弹窗显隐动画 | string |  | fade \| scale \| fade,scale |
| animationDuration | 动画持续时长 | Number | 300 |  |
| pitchWithMap | 是否随着地图倾斜 | Boolean | false |  |
| rotateWithMap | 是否随着地图旋转 | Boolean | false |  |

## Events
| 事件名 | 参数 | 说明  |
| ------- | --------- | ---------------- |

## Methods
| 方法名 | 参数 | 返回值 | 说明  |
| ------- | --------- | --------- |---------------- |

## slots
| slot名字 | 说明 |
| ------- | --------- |
| default | marker 内容 |
