<template>
  <div>
  </div>
</template>

<script>
import { ui } from 'maptalks';

import map from "../../mixins/map";
import options from "../../mixins/options";
import uiComponent from "../../mixins/uiComponent";
import { bindEvent, mergeProps, watchProps } from "../../utils";

export default {
  name: 'MtMenu',
  mixins: [map, options, uiComponent],
  props: {
    width: {
      type: Number,
      default: 160
    },
    maxHeight: {
      type: Number,
      default: 0
    },
    custom: {
      type: Boolean,
      default: false
    },
    items: {
      type: Array,
      default: null
    }
  },
  mounted() {
    this.generateControl();
  },
  methods: {
    generateControl() {
      this.uiComponent = new ui.Menu(mergeProps(this));
      bindEvent(this.uiComponent, this, []);
      watchProps(this, this.uiComponent, undefined, this.mergeOptions);
      this.addToElement();
    },
    addToElement() {
      if (this.$parent.geometry) {
        this.$parent.geometry.setMenu(this.mergeOptions)
      } else {
        this.map.setMenu(this.mergeOptions);
      }
    }
  }
}
</script>
