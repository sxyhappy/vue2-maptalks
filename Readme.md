# vue2-maptalks

vue2-maptalks 是 [vue](https://vuejs.org/) 和 [maptalks](https://maptalks.org/) 的实现

## Links
[API 文档](https://sxyhappy.github.io/vue2-maptalks/)

##  安装

### npm or yarn
```bash
# npm
npm i vue2-maptalks maptalks -S
# yarn
yarn add vue2-maptalks maptalks
```

## 使用

```js
// main.js
import Vue from 'vue';
import {Vue2MapTalks} from 'vue2-maptalks';
import 'maptalks/dist/maptalks.css';

Vue.use(Vue2MapTalks);
```

```html

<div>
  <div class="map">
    <mt-map :options="mapOptions">
      <mt-tile-layer
        id="tile"
        url-template="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
        :subdomains="['a','b','c','d']"
      ></mt-tile-layer>

      <mt-scale></mt-scale>
      <mt-zoom></mt-zoom>
      
      <mt-vector-layer id="vector">
        <mt-marker :coordinates="[-0.113049, 51.498568]">
          <mt-info-window title="infoWindow">
            <div>info body</div>
          </mt-info-window>
        </mt-marker>
      </mt-vector-layer>
    </mt-map>
  </div>
</div>

<script>
export default {
  data() {
    return {
      mapOptions: {
        zoom: 13,
        center: [-0.113049, 51.498568],
      },
    }
  }
}
</script>

```

##  开发
```bash
git clone https://github.com/sxyhappy/vue2-maptalks.git
cd vue2-maptalks

# install dependencies
npm install
# or
yarn

# run dev
npm run dev
```

## LICENSE
[MIT](LICENSE)
