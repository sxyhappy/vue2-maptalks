<template>
  <div v-if="ready">
    <slot></slot>
  </div>
</template>

<script>
import { Sector } from 'maptalks';

import mapMixins from "../../mixins/map";
import geometry from "../../mixins/geometry";
import path from "../../mixins/path";
import options from "../../mixins/options";
import { bindEvent, mergeProps, watchProps } from "../../utils";

export default {
  name: 'MtSector',
  mixins: [mapMixins, geometry, path, options],
  props: {
    coordinates: {
      type: Array,
      required: true
    },
    radius: {
      type: Number,
      required: true
    },
    startAngle: {
      type: Number,
      required: true
    },
    endAngle: {
      type: Number,
      required: true
    },
    numberOfShellPoints: {
      type: Number,
      default: 60
    },
  },
  mounted() {
    this.generateGeometry();
  },
  methods: {
    generateGeometry() {
      if (!this.coordinates) throw new Error('sector coordinates can not be empty');

      if (this.id && this.layer.getGeometryById(this.id)) {
        this.geometry = this.layer.getGeometryById(this.id);
        return;
      }

      this.geometry = new Sector(this.coordinates, this.radius, this.startAngle, this.endAngle, mergeProps(this));
      bindEvent(this.geometry, this, ['ready']);
      watchProps(this, this.geometry, undefined, this.mergeOptions);

      this.geometry.addTo(this.layer);
      this.$emit('ready', this.geometry, this.layer, this.map);

      this.ready = true;
    }
  }
}
</script>
