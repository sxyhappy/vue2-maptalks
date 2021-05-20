# mt-attribute

maptalks control.Attribute

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
      <mt-attribution position="bottom-right" content="vue2-maptalks"></mt-attribution>
      <mt-attribution position="top-left" content="sxyHappy"></mt-attribution>
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
#### options 支持 mt-attribute 的全部属性
:::warning
属性优先级: defaultProps < options < 实际传入的 props
:::
| 属性名         | 描述           | 类型  | 默认值 | 备注 |
| ------------- | ---------------- | --------- | ------- | ----- |
| position | zoom 放置的位置 | String \| Object | top-left |  |
| slider | 是否显示 slider | Boolean | true |  |
| zoomLevel | 是否显示 zoomLevel | Boolean | true |  |
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
