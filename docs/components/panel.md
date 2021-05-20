# mt-panel

Maptalks control.Panel

## Demo
:::demo

```html
<div>
  <mt-button @click="visible = true">open panel</mt-button>
  <div class="map">
    <mt-map :zoom="12" :center="[115.76, 40.50]">
      <mt-tile-layer
        id="tile"
        url-template="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
        :subdomains="['a','b','c','d']"
      ></mt-tile-layer>
      <mt-panel :custom="true" :visible="visible">
        <div>这是一个 panel <mt-button @click="visible = false">关闭</mt-button></div>
      </mt-panel>
    </mt-map>
  </div>
</div>

<script>
export default {
  data() {
    return {
      visible: true
    }
  }
}
</script>
```
:::

## Props
#### options 支持 mt-panel 的全部属性
:::warning
属性优先级: defaultProps < options < 实际传入的 props
:::
| 属性名         | 描述           | 类型  | 默认值 | 备注 |
| ------------- | ---------------- | --------- | ------- | ----- |
| position | zoom 放置的位置 | String \| Object | top-left |  |
| draggable | 是否可拖拽 | Boolean | true |  |
| custom | 内容是否可定制 | Boolean | false |  |
| content | panel内容 | String \| Object | null |  |
| closeButton | 是否显示关闭按钮 | Boolean | true |  |
| options | - | Object | {} |  |

## Events
| 事件名 | 参数 | 说明  |
| ------- | --------- | ---------------- |

## Methods
| 方法名 | 参数 | 返回值 | 说明  |
| ------- | --------- | --------- |---------------- |

## slots
| slot名字 | 说明 |
| ------- | --------- |
| default | panel 内容 |
