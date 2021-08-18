import { mergeProps } from "../utils";

export default {
  props: {
    visible: {
      type: Boolean,
      default: true,
      custom: true
    },
    eventsPropagation: {
      type: Boolean,
      default: false
    },
    eventsToStop: {
      type: Boolean,
      default: null
    },
    dx: {
      type: Number,
      default: 0
    },
    dy: {
      type: Number,
      default: 0
    },
    autoPan: {
      type: Boolean,
      default: false
    },
    single: {
      type: Boolean,
      default: true
    },
    animation: {
      type: String,
      default: null
    },
    animationDuration: {
      type: Number,
      default: 300
    },
    pitchWithMap: {
      type: Boolean,
      default: false
    },
    rotateWithMap: {
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
      uiComponent: null
    }
  },
  methods: {
    setVisible(val) {
      if (val && this.uiComponent) {
        this.toggleEl(true);
        this.uiComponent.show();
        this.$emit('visible', true);
      }
      if (!val && this.uiComponent) {
        this.toggleEl();
        this.uiComponent.hide();
        this.$emit('visible', false);
      }
    },
    showStart() {
      this.toggleEl(true);
    },
    showEnd() {
      this.$emit('update:visible', true)
    },
    hide() {
      this.toggleEl();
      this.$emit('update:visible', false)
    },
    setSlotToContent() {
      if (this.$slots.default) {
        this.uiComponent.setContent(this.$el);
      }
    },
    bindVisibleEvent() {
      this.uiComponent.addEventListener('showstart', this.showStart);
      this.uiComponent.addEventListener('showend', this.showEnd);
      this.uiComponent.addEventListener('hide', this.hide);
    },
    toggleEl(display) {
      if (!this.$el) return;

      this.$el.style = display ? 'display: block' : 'display: none';
    }
  },
  beforeDestroy() {
    if (this.uiComponent) {
      this.uiComponent.remove();
    }
  }
}
