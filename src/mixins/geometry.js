import { mergeProps } from "../utils";

export default {
  inject: ['vectorLayerProvide'],
  props: {
    id: {
      type: [String, Number],
      default: null
    },
    visible: {
      type: Boolean,
      default: true,
      custom: true
    },
    editable: {
      type: Boolean,
      default: true
    },
    interactive: {
      type: Boolean,
      default: true
    },
    cursor: {
      type: String,
      default: null
    },
    measure: {
      type: String,
      default: 'EPSG:4326'
    },
    draggable: {
      type: String,
      default: null
    },
    dragShadow: {
      type: Boolean,
      default: true
    },
    dragOnAxis: {
      type: [Boolean, String],
      default: null
    },
    zIndex: {
      type: Number,
      default: null
    }
  },
  computed: {
    layer() {
      return this.vectorLayerProvide && this.vectorLayerProvide.layer
    },
    mergeOptions() {
      return mergeProps(this);
    }
  },
  data() {
    return {
      geometry: null,
      ready: false
    }
  },
  methods: {
    setVisible(val) {
      if (val && this.geometry) {
        this.geometry.show();
      }
      if (!val && this.geometry) {
        this.geometry.hide();
      }
    },
    getLayer() {
      return this.layer;
    },
    getMap() {
      return this.map;
    },
    getGeometry() {
      return this.geometry
    }
  },
  beforeDestroy() {
    if (this.geometry) {
      this.geometry.remove()
    }
  }
}
