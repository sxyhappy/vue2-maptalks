# 快速上手

##  安装

### npm or yarn
```bash
# npm
npm i vue2-maptalks maptalks -S
# yarn
yarn add vue2-maptalks maptalks
```

### CDN
```html
<script src="<server-name>/vue2-maptalks.umd.js"></script>
```

## 使用
```bash
import Vue from 'vue';
import {Vue2MapTalks} from 'vue2-maptalks';
import 'maptalks/dist/maptalks.css';

Vue.use(Vue2MapTalks);
```

## 获取 Map 实例
### ref 获取
```html
<template>
  <mt-map ref="map"></mt-map>
</template>

<script>
export default {
  data() {
    return {
        map: null
    }
  }
  mounted() {
    this.$nextTick(() => {
      this.map = this.$refs.map.getMap();
    })
  }
}
</script>
```
::: tip
在mounted声明周期获取 map instance 需要包裹在 this.$nextTick 中
:::

### lifeCycle 获取
```html
<template>
  <mt-map ref="map" @ready="handleReady"></mt-map>
</template>

<script>
export default {
  data() {
    return {
      map: null
    }
  }
  methods: {
    handleReady(map) {
      this.map = map;
    }
  }
}
</script>
```
