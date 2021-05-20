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
  name: 'MtOverview',
  mixins: [map, options, control],
  props: {
    position: {
      type: [String, Object],
      default: 'top-right'
    },
    level: {
      type: Number,
      default: 4
    },
    maximize: {
      type: Boolean,
      default: true
    },
    size: {
      type: Array,
      default: () => [300, 200]
    },
    symbol: {
      type: Object,
      default: null
    },
    containerClass: {
      type: [String, Object],
      default: 'maptalks-overview'
    },
    buttonClass: {
      type: [String, Object],
      default: 'maptalks-overview-button'
    }
  },
  mounted() {
    this.generateControl();
  },
  methods: {
    generateControl() {
      this.control = new mapC.Overview(mergeProps(this));

      bindEvent(this.control, this, []);
      watchProps(this, this.control, undefined, this.mergeOptions);

      this.control.addTo(this.map);
    }
  }
}
</script>
