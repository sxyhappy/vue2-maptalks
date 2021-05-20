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
  name: 'MtZoom',
  mixins: [map, options, control],
  props: {
    position: {
      type: [String, Object],
      default: 'top-left'
    },
    slider: {
      type: Boolean,
      default: true
    },
    zoomLevel: {
      type: Boolean,
      default: true
    }
  },
  mounted() {
    this.generateControl();
  },
  methods: {
    generateControl() {
      this.control = new mapC.Zoom(mergeProps(this));

      bindEvent(this.control, this, []);
      watchProps(this, this.control, undefined, this.mergeOptions);

      this.control.addTo(this.map);
    }
  }
}
</script>
