import { mergeProps } from "../utils";

export default {
  props: {
    id: {
      type: [String, Number],
      required: true
    },
    attribution: {
      type: String,
      default: null
    },
    minZoom: {
      type: Number,
      default: null
    },
    maxZoom: {
      type: Number,
      default: null
    },
    visible: {
      type: Boolean,
      default: true,
      custom: true
    },
    opacity: {
      type: Number,
      default: 1
    },
    zIndex: {
      type: Number,
      default: null
    },
    hitDetect: {
      type: Boolean,
      default: true
    },
    globalCompositeOperation: {
      type: String,
      default: null
    },
    debugOutline: {
      type: String,
      default: '#0f0'
    },
    cssFilter: {
      type: String,
      default: null
    },
    forceRenderOnMoving: {
      type: Boolean,
      default: false
    },
    forceRenderOnZooming: {
      type: Boolean,
      default: false
    },
    forceRenderOnRotating: {
      type: Boolean,
      default: false
    },
  },
  computed: {
    mergeOptions() {
      return mergeProps(this);
    }
  },
  data() {
    return {
      layer: null
    }
  },
  methods: {
    setVisible(val) {
      if (val && this.layer) {
        this.layer.show();
      }
      if (!val && this.layer) {
        this.layer.hide();
      }
    },
    getLayer() {
      return this.layer;
    },
    getMap() {
      return this.map;
    }
  },
  beforeDestroy() {
    if (this.layer) {
      this.layer.remove();
    }
  }
}
