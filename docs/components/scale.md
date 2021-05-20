# mt-scale

Maptalks control.Scale

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
      <mt-scale></mt-scale>
      <mt-scale position="bottom-right" imperial="true" :metric="false"></mt-scale>
    </mt-map>
  </div>
</div>

<script>
export default {
}
</script>
```
:::

## Props
#### options 支持 mt-scale 的全部属性
:::warning
属性优先级: defaultProps < options < 实际传入的 props
:::
| 属性名         | 描述           | 类型  | 默认值 | 备注 |
| ------------- | ---------------- | --------- | ------- | ----- |
| position | zoom 放置的位置 | String \| Object | bottom-left |  |
| maxWidth | 最大宽度 | Number | 100 |  |
| metric | 是否显示 公制 | Boolean | true |  |
| imperial | 是否显示 英制 | Boolean | false |  |
| containerClass | scale | String \| Object | null |  |
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
