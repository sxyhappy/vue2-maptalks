<template>
  <div></div>
</template>

<script>
import { DrawTool } from 'maptalks';

import mapMixins from '../../mixins/map';
import options from "../../mixins/options";
import { bindEvent, mergeProps, omit, watchProps } from "../../utils";

export default {
  name: 'MtDrawTool',
  mixins: [mapMixins, options],
  props: {
    enable: {
      type: Boolean,
      default: false,
      custom: true
    },
    mode: {
      type: String,
      default: 'Point' // Point | LineString | Polygon | Circle | Ellipse | Rectangle | FreeHandLineString | FreeHandPolygon
    },
    symbol: {
      type: Object,
    },
    once: {
      type: Boolean,
      default: true
    },
    autoPanAtEdge: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      drawTool: null
    }
  },
  computed: {
    mergeOptions() {
      return mergeProps(this);
    }
  },
  mounted() {
    this.generateDrawTool();
  },
  destroyed() {
  },
  methods: {
    generateDrawTool() {
      this.drawTool = new DrawTool(this.symbol ? this.mergeOptions : omit(this.mergeOptions, ['symbol']))
      bindEvent(this.drawTool, this, []);
      watchProps(this, this.drawTool, undefined, this.mergeOptions);
      this.enableChangeEvent();
      this.drawTool.addTo(this.map);
    },
    setEnable(val) {
      if (val) {
        this.enableDraw();
      } else {
        this.disableDraw();
      }
    },
    enableDraw() {
      if (!this.drawTool) return;
      this.drawTool.enable();
      this.$emit('update:enable', true);
    },
    disableDraw() {
      if (!this.drawTool) return;
      this.drawTool.disable();
      this.$emit('update:enable', false);
    },
    enableChangeEvent() {
      this.drawTool.on('enable', this.enableDraw);
      this.drawTool.on('disable', this.disableDraw);

      this.$once('hook:beforeDestroy', () => {
        this.drawTool.removeEventListener('enable', this.enableDraw);
        this.drawTool.removeEventListener('disable', this.disableDraw);
      })
    },
  }
}
</script>
