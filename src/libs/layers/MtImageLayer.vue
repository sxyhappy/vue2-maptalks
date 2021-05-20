<template>
  <div></div>
</template>

<script>
import { ImageLayer } from 'maptalks';

import map from "../../mixins/map";
import layer from "../../mixins/layer";
import options from "../../mixins/options";

import { bindEvent, mergeProps, omit, watchProps } from "../../utils";

export default {
  name: 'MtImageLayer',
  mixins: [map, layer, options],
  props: {
    images: {
      type: Array,
      default: null
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

      if (this.map.getLayer(this.id)) {
        return this.layer = this.map.getLayer(this.id);
      }

      this.layer = new ImageLayer(this.id, this.images, omit(mergeProps(this), ['id', 'images']));
      bindEvent(this.layer, this, ['ready']);
      watchProps(this, this.layer, undefined, this.mergeOptions);

      this.layer.addTo(this.map);
      this.$emit('ready', this.layer, this.map);
    }
  }
}
</script>
