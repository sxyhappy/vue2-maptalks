export default {
  props: {
    smoothness: {
      type: Number,
      default: 0
    },
    enableSimplify: {
      type: Boolean,
      default: true
    },
    simplifyTolerance: {
      type: Number,
      default: 2
    },
    enableClip: {
      type: Boolean,
      default: true
    },
    symbol: {
      type: Object,
    }
  }
}
