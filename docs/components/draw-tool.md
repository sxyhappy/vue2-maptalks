# mt-draw-tool

## Demo
:::demo

```html

<div>
  <mt-button class="m-8" v-for="fun in editFunctions" @click="mode = fun; enable = true">{{ fun }}</mt-button>
  <mt-button @click="editEnd">结束编辑</mt-button>
  <mt-button @click="deleteGeometry">删除(可键盘删除)</mt-button>
  <div class="map">
    <mt-map :options="mapOptions">
      <mt-tile-layer
        id="tile"
        url-template="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
        :subdomains="['a','b','c','d']"
      ></mt-tile-layer>
      <mt-draw-tool :mode="mode" :enable.sync="enable" @drawend="handleDrawEnd" :once="true"></mt-draw-tool>
      <mt-vector-layer ref="layer" id="vector" @click="handleClick" :geometries="geometries"></mt-vector-layer>
    </mt-map>
  </div>
</div>

<script>
export default {
  data() {
    return {
      enable: false,
      mode: 'Point',
      mapOptions: {
        zoom: 12,
        center: [115.76, 40.50],
      },
      geometries: [],
      editFunctions: ['Point', 'LineString', 'Polygon', 'Circle', 'Ellipse', 'Rectangle', 'FreeHandLineString', 'FreeHandPolygon'],
      currentSelected: null
    }
  },
  methods: {
    handleDrawEnd(param) {
      this.geometries.push(param.geometry);
    },
    handleClick(event) {
      event.target.startEdit();
      this.currentSelected = event.target;
    },
    editEnd() {
      if(this.currentSelected) {
        this.currentSelected.endEdit();
      }
    },
    deleteGeometry() {
      if (!this.currentSelected) return;

      this.geometries = this.geometries.filter(g => JSON.stringify(g) !== JSON.stringify(this.currentSelected))
    }
  },
  mounted() {
    window.addEventListener('keyup', e => {
      if (e.key.toLowerCase() === 'backspace' || e.key.toLowerCase() === 'delete') {
        this.deleteGeometry();
      }
    })
  }
}
</script>
```
:::

## Props
#### options 支持 mt-draw-tool 全部属性
:::warning
属性优先级: defaultProps < options < 实际传入的 props
:::
| 属性名         | 描述           | 类型  | 默认值 | 备注 |
| ------------- | ---------------- | --------- | ------- | ----- |
| enable | 是否激活绘制工具 | Boolean | false |  |
| once | 绘制结束后立即禁用 | Boolean | true |  |
| mode | geometry 类型 | String | Point | Point | LineString | Polygon | Circle | Ellipse | Rectangle | FreeHandLineString | FreeHandPolygon |
| symbol | geometry 的 symbol | Object | null |  |
| autoPanAtEdge | 是否自动判断边缘| Boolean | false |  |

## Events
| 事件名 | 参数 | 说明  |
| ------- | --------- | ---------------- |

## Methods
| 方法名 | 参数 | 返回值 | 说明  |
| ------- | --------- | --------- |---------------- |

## slots
| slot名字 | 说明 |
| ------- | --------- |
