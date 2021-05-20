import base from './rollup.base';

export default [
  {
    ...base,
    input: 'src/index.js',
    output: {
      file: 'dist/vue2-maptalks.js',
      format: 'cjs',
    }
  },
  {
    ...base,
    input: 'src/index.js',
    output: {
      file: 'dist/vue2-maptalks.umd.js',
      format: 'umd',
      name: 'Vue2Maptalks',
      globals: {
        vue: "Vue",
      }
    }
  }
]
