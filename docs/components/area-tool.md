# mt-area-tool

Maptalks AreaTool

## Demo
:::demo
```html
<div>
  <div class="m-b-8">
    <mt-button @click="enable = !enable">toggle enable {{ enable }}</mt-button>
  </div>
  <div class="map">
    <mt-map :zoom="12" :center="[121.48053653961283, 31.24244899384889]">
      <mt-tile-layer
        id="tile"
        url-template="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
        :subdomains="['a','b','c','d']"
      ></mt-tile-layer>
      <mt-area-tool :enable.sync="enable"></mt-area-tool>
    </mt-map>
  </div>
</div>

<script>
export default {
  data() {
    return {
      enable: true,
    }
  }
}
</script>
```
:::

## Props
#### options 支持 mt-area-tool 全部属性
:::warning
属性优先级: defaultProps < options < 实际传入的 props
:::
| 属性名         | 描述           | 类型  | 默认值 | 备注 |
| ------------- | ---------------- | --------- | ------- | ----- |
| enable | 是否激活测量工具 | Boolean | true |  |
| once | 绘制结束后立即禁用 | Boolean | null |  |
| language | 测量工具语言 | String | zh-CN |  |
| metric | 是否显示 公制 | Boolean | true |  |
| imperial | 是否显示 英制 | Boolean | false |  |
| symbol | line 的 symbol | Object | null |  |
| vertexSymbol | 顶点 的 symbol | Object | null |  |
| labelOptions | 顶点 label 的 options | Object | null |  |

## Events
| 事件名 | 参数 | 说明  |
| ------- | --------- | ---------------- |

## Methods
| 方法名 | 参数 | 返回值 | 说明  |
| ------- | --------- | --------- |---------------- |

## slots
| slot名字 | 说明 |
| ------- | --------- |
