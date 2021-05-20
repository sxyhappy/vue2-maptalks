# mt-info-window

maptalks ui.infoWindow

## Demo
:::demo

```html
<div>
  <div class="m-b-8">
    <mt-button @click="visible = !visible">toggle visible {{ visible }}</mt-button>
  </div>
  <div class="map">
    <mt-map :zoom="12" :center="[115.76, 40.50]">
      <mt-tile-layer
        id="tile"
        url-template="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
        :subdomains="['a','b','c','d']"
      ></mt-tile-layer>
      <mt-info-window title="测试弹窗" content="弹窗内容" :visible.sync="visible"></mt-info-window>
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
```
:::

## Props
#### options 支持 mt-info-window 的全部属性
:::warning
属性优先级: defaultProps < options < 实际传入的 props
:::
| 属性名         | 描述           | 类型  | 默认值 | 备注 |
| ------------- | ---------------- | --------- | ------- | ----- |
| autoPan | - | Boolean | true |  |
| autoCloseOn | 自动关闭弹窗 | Boolean | null |  |
| autoOpenOn | 自动打开弹窗 | Boolean | null |  |
| width | 弹窗宽度 | Number | 300 |  |
| minHeight | 弹窗最小高度 | Number | 120 |  |
| custom | 是否自定义弹窗 | Boolean | false |  |
| title | 弹窗标题 | String | null |  |
| content | 弹窗内容 | String \| Object | null |  |
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
| default | 弹窗显示内容 |
