<template>
  <div>

  </div>
</template>

<script>
import { ParticleLayer } from 'maptalks';

import map from "../../mixins/map";
import layer from "../../mixins/layer";
import options from "../../mixins/options";
import { bindEvent, mergeProps, omit, watchProps } from "../../utils";

export default {
  name: 'MtParticleLayer',
  mixins: [map, options, layer],
  props: {
    animation: {
      type: Boolean,
      default: true
    },
    doubleBuffer: {
      type: Boolean,
      default: true
    },
    getParticles: {
      type: Function,
      default: () => {}
    },
    fps: {
      type: Number,
      default: 1000 / 16
    },
    renderer: {
      type: String,
      default: 'canvas'
    },
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

      this.layer = new ParticleLayer(this.id, omit(mergeProps(this), ['id', 'getParticles']));
      bindEvent(this.layer, this, ['ready']);
      watchProps(this, this.layer, 'getParticles', this.mergeOptions);

      this.layer.getParticles = this.getParticles

      this.layer.addTo(this.map);
      this.$emit('ready', this.layer, this.map);
    },
  }
}
</script>
