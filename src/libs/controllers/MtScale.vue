<template>
  <div></div>
</template>

<script>
import { control as mapC } from 'maptalks';

import map from "../../mixins/map";
import options from "../../mixins/options";
import control from "../../mixins/control";
import { bindEvent, mergeProps, watchProps } from "../../utils";

export default {
  name: 'MtScale',
  mixins: [map, options, control],
  props: {
    position: {
      type: [String, Object],
      default: 'bottom-left'
    },
    maxWidth: {
      type: Number,
      default: 100
    },
    metric: {
      type: Boolean,
      default: true
    },
    imperial: {
      type: [Boolean, String],
      default: false
    },
    containerClass: {
      type: [String, Object],
      default: null
    }
  },
  mounted() {
    this.generateControl();
  },

  methods: {
    generateControl() {
      this.control = new mapC.Scale(mergeProps(this));

      bindEvent(this.control, this, []);
      watchProps(this, this.control, undefined, this.mergeOptions);

      this.control.addTo(this.map);
    }
  }
}
</script>
