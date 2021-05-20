import { mergeProps } from "../utils";

export default {
  props: {
    enable: {
      type: Boolean,
      default: true,
      custom: true
    }
  },
  data() {
    return { tool: null }
  },
  computed: {
    mergeOptions() {
      return mergeProps(this);
    },
    toolSet() {
      return this.mapProvide && this.mapProvide.toolSet;
    }
  },
  methods: {
    setEnable(val) {
      if (!this.tool) return;
      this.disableAllTool();

      this.$nextTick(() => {
        if (val) {
          this.tool.enable();
        } else {
          this.tool.disable();
        }
      })
    },
    addToolToMap(tool) {
      if (this.toolSet) {
        this.toolSet.add(tool);
      }
    },
    bindEnableEvent() {
      this.tool.addEventListener('enable', this.enableEvent);
      this.tool.addEventListener('disable', this.disableEvent);
    },
    enableEvent() {
      this.$emit('update:enable', true);
    },
    disableEvent() {
      this.$emit('update:enable', false)
    },
    disableAllTool() {
      Array.from(this.toolSet).filter(tool => tool !== this.tool).forEach(tool => tool.disable())
    }
  },
}
