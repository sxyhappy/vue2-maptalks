<template>
  <div v-if="ready">
    <slot></slot>
  </div>
</template>

<script>
import { Marker } from 'maptalks';

import map from '../../mixins/map';
import geometry from "../../mixins/geometry";
import options from "../../mixins/options";
import { bindEvent, mergeProps, watchProps } from "../../utils";

export default {
  name: 'MtMarker',
  mixins: [map, geometry, options],
  props: {
    coordinates: {
      type: [Array, Object],
      default: null
    },
    symbol: {
      type: Object,
      default: null
    },
    properties: {
      type: Object,
      default: null
    }
  },
  computed: {
    mergeOptions() {
      return mergeProps(this);
    }
  },
  mounted() {
    this.generateGeometry();
  },
  methods: {
    generateGeometry() {
      if (!this.coordinates) throw new Error('marker coordinates can not be empty');

      if (this.id && this.layer.getGeometryById(this.id)) {
        this.geometry = this.layer.getGeometryById(this.id);
        return;
      }

      this.geometry = new Marker(this.coordinates, mergeProps(this));
      bindEvent(this.geometry, this, ['ready']);
      watchProps(this, this.geometry, undefined, this.mergeOptions);

      this.geometry.addTo(this.layer);
      this.$emit('ready', this.geometry, this.layer, this.map);

      this.ready = true;
    }
  }
}
</script>
