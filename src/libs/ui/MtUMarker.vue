<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import { ui } from 'maptalks';

import mapMixins from "../../mixins/map";
import uiComponent from "../../mixins/uiComponent";
import options from "../../mixins/options";
import { bindEvent, mergeProps, watchProps } from "../../utils";

export default {
  name: 'MtUMarker',
  mixins: [mapMixins, uiComponent, options],
  props: {
    coordinates: {
      type: [Array, Object],
      default: null
    },
    content: {
      type: [String, Object],
      default: null
    }
  },
  mounted() {
    this.generateInfoWindow();
  },
  methods: {
    generateInfoWindow() {
      this.uiComponent = new ui.UIMarker(this.coordinates, mergeProps(this));
      this.setSlotToContent();

      bindEvent(this.uiComponent, this, []);
      watchProps(this, this.uiComponent, undefined, this.mergeOptions);

      this.uiComponent.addTo(this.map);
      this.setVisible(this.visible);
      this.bindVisibleEvent();
    }
  }
}
</script>
