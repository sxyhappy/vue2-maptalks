<template>
  <div v-if="ready">
    <slot></slot>
  </div>
</template>

<script>
import { Ellipse } from 'maptalks';

import mapMixins from "../../mixins/map";
import geometry from "../../mixins/geometry";
import path from "../../mixins/path";
import options from "../../mixins/options";
import { bindEvent, mergeProps, watchProps } from "../../utils";

export default {
  name: 'MtEllipse',
  mixins: [mapMixins, geometry, path, options],
  props: {
    coordinates: {
      type: [Array, Object],
      required: true
    },
    width: {
      type: Number,
      required: true
    },
    height: {
      type: Number,
      required: true
    }
  },
  mounted() {
    this.generateGeometry();
  },
  methods: {
    generateGeometry() {
      if (!this.coordinates) throw new Error('ellipse coordinates can not be empty');

      if (this.id && this.layer.getGeometryById(this.id)) {
        this.geometry = this.layer.getGeometryById(this.id);
        return;
      }

      this.geometry = new Ellipse(this.coordinates, this.width, this.height, mergeProps(this));
      bindEvent(this.geometry, this, ['ready']);
      watchProps(this, this.geometry, undefined, this.mergeOptions);

      this.geometry.addTo(this.layer);
      this.$emit('ready', this.geometry, this.layer, this.map);

      this.ready = true;
    }
  }
}
</script>
