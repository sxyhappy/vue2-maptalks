<template>
  <div class="mt-map">
    <div ref="map" class="mt-map__instance"></div>
    <slot v-if="ready"></slot>
  </div>
</template>

<script>
import Vue from 'vue';
import { Map, Coordinate } from 'maptalks';

import options from "../mixins/options";
import { bindEvent, mergeProps, watchProps } from "../utils";

const mapProvide = Vue.observable({map: null, toolSet: new Set()});

export default {
  name: 'MtMap',
  mixins: [options],
  provide() {
    return {
      mapProvide,
    }
  },
  props: {
    center: {
      type: [Object, Array],
      default: () => [0, 0],
      custom: true
    },
    zoom: {
      type: Number,
      default: 0,
      custom: true
    },
    baseLayer: {
      type: Object,
      default: null
    },
    minZoom: {
      type: Number,
      default: null
    },
    maxZoom: {
      type: Number,
      default: null
    },
    spatialReference: {
      type: Object,
      default: null
    },
    maxExtent: {
      type: Object,
      default: null
    },
    centerCross: {
      type: Boolean,
      default: false
    },
    seamlessZoom: {
      type: Boolean,
      default: false
    },
    zoomInCenter: {
      type: Boolean,
      default: true
    },
    zoomOrigin: {
      type: Array,
      default: null
    },
    zoomAnimation: {
      type: Boolean,
      default: true
    },
    zoomAnimationDuration: {
      type: Number,
      default: 330
    },
    panAnimation: {
      type: Boolean,
      default: true
    },
    panAnimationDuration: {
      type: Number,
      default: 600
    },
    zoomable: {
      type: Boolean,
      default: true
    },
    enableInfoWindow: {
      type: Boolean,
      default: true
    },
    hitDetect: {
      type: Boolean,
      default: true
    },
    hitDetectLimit: {
      type: Number,
      default: 5
    },
    fpsOnInteracting: {
      type: Number,
      default: 25
    },
    layerCanvasLimitOnInteracting: {
      type: Number,
      default: -1
    },
    fixCenterOnResize: {
      type: Boolean,
      default: true
    },
    maxPitch: {
      type: Number,
      default: 80
    },
    maxVisualPitch: {
      type: Number,
      default: 70
    },
    viewHistory: {
      type: Boolean,
      default: true
    },
    viewHistoryCount: {
      type: Number,
      default: 10
    },
    draggable: {
      type: Boolean,
      default: true,
    },
    dragPan: {
      type: Boolean,
      default: true,
    },
    dragRotate: {
      type: Boolean,
      default: true,
    },
    dragPitch: {
      type: Boolean,
      default: true,
    },
    dragRotatePitch: {
      type: Boolean,
      default: true,
    },
    touchGesture: {
      type: Boolean,
      default: true,
    },
    touchZoom: {
      type: Boolean,
      default: true,
    },
    touchRotate: {
      type: Boolean,
      default: true,
    },
    touchPitch: {
      type: Boolean,
      default: true,
    },
    touchZoomRotate: {
      type: Boolean,
      default: false,
    },
    doubleClickZoom: {
      type: Boolean,
      default: true,
    },
    scrollWheelZoom: {
      type: Boolean,
      default: true,
    },
    geometryEvents: {
      type: Boolean,
      default: true,
    },
    control: {
      type: Boolean,
      default: true,
    },
    attribution: {
      type: [Object, Boolean],
      default: true,
    },
    zoomControl: {
      type: [Object, Boolean],
      default: false,
    },
    scaleControl: {
      type: [Object, Boolean],
      default: false,
    },
    overviewControl: {
      type: [Object, Boolean],
      default: false,
    },
    fog: {
      type: Boolean,
      default: true,
    },
    fogColor: {
      type: Array,
      default: () => [233, 233, 233]
    },
    renderer: {
      type: String,
      default: 'canvas'
    },
    devicePixelRatio: {
      type: Number,
      default: null
    }
  },
  data() {
    return {
      ready: false,
      map: null
    }
  },
  computed: {
    mergeOptions() {
      return mergeProps(this);
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.generateMap();
    })
  },
  beforeDestroy() {
    this.map.remove();
  },
  methods: {
    getMap() {
      return this.map;
    },

    generateMap() {
      if (this.map) {
        this.map.remove()
      }

      this.map = new Map(this.$refs.map, mergeProps(this));

      bindEvent(this.map, this, ['ready', 'update:center', 'update:zoom']);
      watchProps(this, this.map, undefined, this.mergeOptions);

      this.map.addEventListener('moving', this.mapMove);
      this.map.addEventListener('zoomend', this.mapZoom);

      this.ready = true;
      mapProvide.map = this.map;
      this.$emit('ready', this.map);
    },

    setCenter(val, oldVal) {
      if (!val) return;
      const newCenter = new Coordinate(val);
      const oldCenter = new Coordinate(oldVal);

      if (newCenter.x !== oldCenter.x || newCenter.y !== oldCenter.y) {
        this.map.setCenter(newCenter)
      }
    },

    mapMove() {
      let center = this.map.getCenter();
      if (Array.isArray(this.center)) {
        center = [this.map.getCenter().x, this.map.getCenter().y];
      }
      this.$emit('update:center', center);
    },

    mapZoom() {
      this.$emit('update:zoom', this.map.getZoom());
    },

    setZoom(val, oldVal) {
      if (!val) return;
      if (val !== oldVal) {
        this.map.setZoom(val)
      }
    }
  }
}
</script>

<style>
.mt-map {
  width: 100%;
  height: 100%;
}

.mt-map__instance {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
