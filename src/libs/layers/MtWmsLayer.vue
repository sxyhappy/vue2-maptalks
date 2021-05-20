<template>
  <div></div>
</template>

<script>
import { WMSTileLayer } from 'maptalks';

import map from "../../mixins/map";
import layer from "../../mixins/layer";
import options from "../../mixins/options";

import { bindEvent, mergeProps, omit, watchProps } from "../../utils";

export default {
  name: 'MtWmsLayer',
  mixins: [map, layer, options],
  props: {
    urlTemplate: {
      type: [String, Function],
      required: true,
    },
    layers: {
      type: String,
      default: null
    },
    styles: {
      type: String,
      default: ''
    },
    format: {
      type: String,
      default: 'image/jpeg'
    },
    transparent: {
      type: Boolean,
      default: false
    },
    version: {
      type: String,
      default: '1.1.1'
    },
    crs: {
      type: String,
      default: null
    },
    uppercase: {
      type: Boolean,
      default: false
    },
    detectRetina: {
      type: Boolean,
      default: false
    },
    subdomains: {
      type: Array,
      default: null
    },
    spatialReference: {
      type: Object,
      default: null
    },
    tileSize: {
      type: Array,
      default: () => [256, 256]
    },
    offset: {
      type: [Array, Function],
      default: () => [0, 0]
    },
    tileSystem: {
      type: Array,
      default: null
    },
    maxAvailableZoom: {
      type: Number,
      default: null
    },
    repeatWorld: {
      type: Boolean,
      default: true
    },
    background: {
      type: Boolean,
      default: true
    },
    backgroundZoomDiff: {
      type: Number,
      default: 6
    },
    placeholder: {
      type: [Boolean, Function],
      default: false
    },
    fragmentShader: {
      type: String,
      default: null
    },
    crossOrigin: {
      type: String,
      default: null
    },
    fadeAnimation: {
      type: Boolean,
      default: true
    },
    debug: {
      type: Boolean,
      default: false
    },
    renderer: {
      type: String,
      default: 'gl'
    },
    maxCacheSize: {
      type: Number,
      default: 256
    },
    cascadeTiles: {
      type: Boolean,
      default: true
    },
    zoomOffset: {
      type: Number,
      default: 0
    },
    tileRetryCount: {
      type: Number,
      default: 0
    },
  },
  mounted() {
    this.generateLayer();
  },
  methods: {
    generateLayer() {
      if (!this.id) throw new Error('layer id can not be null');
      if (!this.urlTemplate) throw new Error('Wms-Layer urlTemplate can not be null');

      if (this.map.getLayer(this.id)) {
        return this.layer = this.map.getLayer(this.id);
      }

      this.layer = new WMSTileLayer(this.id, omit(mergeProps(this), 'id'));
      bindEvent(this.layer, this, ['ready']);
      watchProps(this, this.layer, undefined, this.mergeOptions);

      this.layer.addTo(this.map);
      this.$emit('ready', this.layer, this.map);
    }
  }
}
</script>
