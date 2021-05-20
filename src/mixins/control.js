import { mergeProps } from "../utils";

export default {
  data() {
    return { control: null }
  },
  computed: {
    mergeOptions() {
      return mergeProps(this);
    }
  },
  beforeDestroy() {
    if (this.control) {
      this.control.remove();
    }
  }
}
