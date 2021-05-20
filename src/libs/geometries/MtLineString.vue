<template>
  <div v-if="ready">
    <slot></slot>
  </div>
</template>

<script>
import { LineString } from 'maptalks';

import map from "../../mixins/map";
import geometry from "../../mixins/geometry";
import path from "../../mixins/path";
import options from "../../mixins/options";
import { bindEvent, mergeProps, watchProps } from "../../utils";

export default {
  name: 'MtLineString',
  mixins: [map, geometry, path, options],
  props: {
    coordinates: {
      type: Array,
      default: null
    },
    arrowStyle: {
      type: [String, Array],
      default: null
    },
    arrowPlacement: {
      type: String,
      default: 'vertex-last'
    }
  },
  mounted() {
    this.generateGeometry();
  },
  methods: {
    generateGeometry() {
      if (!Array.isArray(this.coordinates) || this.coordinates.length === 0) throw new Error('polygon coordinates can not be empty');

      if (this.id && this.layer.getGeometryById(this.id)) {
        this.geometry = this.layer.getGeometryById(this.id);
        return;
      }

      this.geometry = new LineString(this.coordinates, mergeProps(this));
      bindEvent(this.geometry, this, ['ready']);
      watchProps(this, this.geometry, undefined, this.mergeOptions);

      this.geometry.addTo(this.layer);
      this.$emit('ready', this.geometry, this.layer, this.map);

      this.ready = true;
    }
  }
}
</script>
