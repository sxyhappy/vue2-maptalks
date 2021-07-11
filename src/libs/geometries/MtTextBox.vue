<template>
  <div v-if="ready">
    <slot></slot>
  </div>
</template>

<script>
import { TextBox } from 'maptalks';

import map from '../../mixins/map';
import geometry from "../../mixins/geometry";
import options from "../../mixins/options";
import { bindEvent, mergeProps, watchProps } from "../../utils";

export default {
  name: 'MtTextBox',
  mixins: [map, geometry, options],
  props: {
    coordinates: {
      type: [Array, Object],
      default: null
    },
    properties: {
      type: Object,
      default: null
    },
    content: {
      type: String,
      default: ''
    },
    width: {
      type: Number,
      default: null
    },
    height: {
      type: Number,
      default: null
    },
    boxSymbol: {
      type: Object,
      default: null,
      require: false
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
      if (!this.coordinates) throw new Error('textbox coordinates can not be empty');
      if (!this.content) throw new Error('textbox content can not be empty')
      if (!this.width) throw new Error('textbox width can not be empty')
      if (!this.height) throw new Error('textbox height can not be empty')

      if (this.id && this.layer.getGeometryById(this.id)) {
        this.geometry = this.layer.getGeometryById(this.id);
        return;
      }

      this.geometry = new TextBox(this.content,this.coordinates,this.width,this.height, mergeProps(this));

      bindEvent(this.geometry, this, ['ready']);
      watchProps(this, this.geometry, undefined, this.mergeOptions);

      this.geometry.addTo(this.layer);
      this.$emit('ready', this.geometry, this.layer, this.map);

      this.ready = true;
    }
  }
}
</script>
