export default {
  inject: ['mapProvide'],
  computed: {
    map() {
      return this.mapProvide && this.mapProvide.map;
    }
  }
}
