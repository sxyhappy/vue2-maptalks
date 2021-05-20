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
  name: 'MtInfoWindow',
  mixins: [mapMixins, uiComponent, options],
  props: {
    coordinates: {
      type: Array,
      default: null
    },
    autoPan: {
      type: Boolean,
      default: null
    },
    autoCloseOn: {
      type: Boolean,
      default: null
    },
    autoOpenOn: {
      type: [Boolean, String],
      default: 'click'
    },
    width: {
      type: Number,
      default: 300
    },
    minHeight: {
      type: Number,
      default: 120
    },
    custom: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: null
    },
    content: {
      type: [String, Object],
      default: null
    }
  },
  watch: {
    deep: true,
    coordinates: {
      handler() {
        if (!this.$parent.geometry && this.map && this.uiComponent) {
          this.uiComponent.remove();

          this.generateInfoWindow();
        }
      }
    }
  },
  mounted() {
    this.generateInfoWindow();
  },
  methods: {
    generateInfoWindow() {
      this.uiComponent = new ui.InfoWindow(mergeProps(this));
      this.setSlotToContent();

      bindEvent(this.uiComponent, this, []);
      watchProps(this, this.uiComponent, undefined, this.mergeOptions);

      this.addInfoWindows();

      this.setVisible(this.visible);
      this.bindVisibleEvent();
    },
    addInfoWindows() {
      if (this.$parent.geometry) {
        this.uiComponent.addTo(this.$parent.geometry);
      } else if (this.map) {
        let coordinates = this.coordinates;
        if (!this.coordinates) {
          coordinates = this.map.getCenter();
        }

        this.uiComponent.addTo(this.map).show(coordinates);
      }
    }
  }
}
</script>
