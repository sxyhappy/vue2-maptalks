<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import { control as mapC } from 'maptalks';

import map from "../../mixins/map";
import options from "../../mixins/options";
import control from "../../mixins/control";
import { bindEvent, mergeProps, watchProps } from "../../utils";

export default {
  name: 'MtPanel',
  mixins: [map, options, control],
  props: {
    visible: {
      type: Boolean,
      default: true,
      custom: true
    },
    position: {
      type: [String, Object],
      default: 'top-right'
    },
    draggable: {
      type: Boolean,
      default: true
    },
    custom: {
      type: Boolean,
      default: false
    },
    content: {
      type: [String, Object],
      default: null
    },
    closeButton: {
      type: Boolean,
      default: true
    }
  },
  mounted() {
    this.generateControl();
  },
  methods: {
    generateControl() {
      this.control = new mapC.Panel(mergeProps(this));

      if (this.$slots.default) {
        this.control.setContent(this.$el);
      }

      bindEvent(this.control, this, []);
      watchProps(this, this.control, undefined, this.mergeOptions);

      this.control.addTo(this.map);
    },
    setVisible(val) {
      if (val && this.control) {
        this.control.show();
      }
      if (!val && this.control) {
        this.control.hide();
      }
    }
  }
}
</script>
