import { nodeResolve } from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import { babel } from "@rollup/plugin-babel";
import vuePlugin from "rollup-plugin-vue";

export default {
  external: ['vue', 'maptalks'],
  plugins: [
    nodeResolve({
      extensions: ['.vue', '.js']
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
      preventAssignment: true
    }),
    babel({ babelHelpers: "runtime", exclude: '**/node_modules/**' }),
    vuePlugin({ css: true }),
  ]
}
