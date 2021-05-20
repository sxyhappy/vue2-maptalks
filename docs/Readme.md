---
home: true
heroText: Vue2 MapTalks
tagline: MapTalks 的 Vue2 实现
actionText: Get Started →
actionLink: /guide/
---

:::demo

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
:::


