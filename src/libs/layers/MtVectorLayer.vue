<template>
  <div v-if="layer">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
import { VectorLayer } from 'maptalks';

const vectorLayerProvide = Vue.observable({layer: null});

import map from '../../mixins/map';
import options from "../../mixins/options";
import layer from "../../mixins/layer";
import { bindEvent, mergeProps, omit, watchProps } from "../../utils";

export default {
  name: 'MtVectorLayer',
  mixins: [map, options, layer],
  provide() {
    return {
      vectorLayerProvide
    }
  },
  props: {
    geometries: {
      type: [Array, Object],
      default: null,
      custom: true
    },
    debug: {
      type: Boolean,
      default: false
    },
    cursor: {
      type: String,
      default: null
    },
    enableSimplify: {
      type: Boolean,
      default: true
    },
    geometryEvents: {
      type: Boolean,
      default: true
    },
    defaultIconSize: {
      type: Array,
      default: () => [20, 20]
    },
    enableAltitude: {
      type: Boolean,
      default: false
    },

    altitudeProperty: {
      type: String,
      default: 'altitude'
    },
    drawAltitude: {
      type: Boolean,
      default: false
    },
    altitude: {
      type: Number,
      default: 0
    },
    drawImmediate: {
      type: Boolean,
      default: false
    },
    renderer: {
      type: String,
      default: 'canvas'
    },
  },
  watch: {
    geometries: {
      handler(val) {
        if (JSON.stringify(val) !== JSON.stringify(this.layer.getGeometries()) && this.layer) {
          this.layer.clear();

          this.addGeometries(val);
        }
      }
    }
  },
  mounted() {
    this.generateLayer();
  },
  methods: {
    generateLayer() {
      if (!this.id) throw new Error('layer id can not be null');

      if (this.map.getLayer(this.id)) {
        return this.layer = this.map.getLayer(this.id);
      }

      this.layer = new VectorLayer(this.id, this.geometries, omit(mergeProps(this), ['id', 'geometries']));
      bindEvent(this.layer, this, ['ready']);
      watchProps(this, this.layer, 'geometries', this.mergeOptions);

      vectorLayerProvide.layer = this.layer;
      this.layer.addTo(this.map);
      this.$emit('ready', this.layer, this.map);
    },
    addGeometries(val) {
      if (Array.isArray(val)) {
        val.forEach(geometry => {
          bindEvent(geometry, this, []);
        })
      } else if (val) {
        bindEvent(val, this, []);
      }

      this.layer.addGeometry(val);
    }
  }
}
</script>
