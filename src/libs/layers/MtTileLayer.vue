<template>
  <div></div>
</template>

<script>
import { TileLayer } from 'maptalks';

import options from "../../mixins/options";
import map from "../../mixins/map";
import layer from "../../mixins/layer";

import { bindEvent, mergeProps, omit, watchProps } from "../../utils";

export default {
  name: 'MtTileLayer',
  mixins: [options, map, layer],
  props: {
    urlTemplate: {
      type: [String, Function],
      required: true,
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
    fadeAnimation: {
      type: Boolean,
      default: true
    },
    debug: {
      type: Boolean,
      default: false
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
    crossOrigin: {
      type: String,
      default: null
    },
    renderer: {
      type: String,
      default: 'gl'
    },
  },
  mounted() {
    this.generateLayer();
  },
  methods: {
    generateLayer() {
      if (!this.id) throw new Error('layer id can not be null');
      if (!this.urlTemplate) throw new Error('tile-layer urlTemplate can not be null');

      if (this.map.getLayer(this.id)) {
        return this.layer = this.map.getLayer(this.id);
      }

      this.layer = new TileLayer(this.id, omit(mergeProps(this), 'id'));
      bindEvent(this.layer, this, ['ready']);
      watchProps(this, this.layer, undefined, this.mergeOptions);

      this.layer.addTo(this.map);
      this.$emit('ready', this.layer, this.map);
    }
  }
}
</script>
