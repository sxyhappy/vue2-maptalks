<template>
  <div v-if="ready"></div>
</template>

<script>
import { MultiPolygon } from 'maptalks';

import mapMixins from "../../mixins/map";
import geometry from "../../mixins/geometry";
import options from "../../mixins/options";
import { bindEvent, mergeProps, watchProps } from "../../utils";

export default {
  name: 'MtMultiPolygon',
  mixins: [mapMixins, geometry, options],
  props: {
    coordinates: {
      type: Array,
      default: null
    },
    symbol: {
      type: Object,
      default: null
    }
  },
  mounted() {
    this.generateGeometry();
  },
  methods: {
    generateGeometry() {
      if (!Array.isArray(this.coordinates) || this.coordinates.length === 0) throw new Error('multi-polygon coordinates can not be empty');

      this.geometry = new MultiPolygon(this.coordinates, mergeProps(this));
      bindEvent(this.geometry, this, ['ready']);
      watchProps(this, this.geometry, undefined, this.mergeOptions);

      this.geometry.addTo(this.layer);
      this.$emit('ready', this.geometry, this.layer, this.map);

      this.ready = true;
    }
  }
}
</script>
