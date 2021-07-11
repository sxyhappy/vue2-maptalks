module.exports = {
  title: 'Vue2 MapTalks',
  description: 'MapTalks Vue2实现',
  base: '/vue2-maptalks/',
  head: [
  ],
  themeConfig: {
    sidebar: {
      '/guide/': [''],
      '/components/': [
        '',
        'map',
        'tile-layer',
        'vector-layer',
        'wms-layer',
        'image-layer',
        'particle-layer',

        'marker',
        'circle',
        'ellipse',
        'line-string',
        'polygon',
        'rectangle',
        'sector',
        'textbox',

        'multi-line-string',
        'multi-point',
        'multi-polygon',

        'zoom',
        'panel',
        'scale',
        'attribution',
        'overview',

        'draw-tool',
        'distance-tool',
        'area-tool',

        'info-window',
        "u-marker",
        'menu'
      ]
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '快速上手', link: '/guide/' },
      { text: '组件', link: '/components/' },
      { text: '示例', link: '/examples/' }
    ]
  },
  plugins: [
    'vuepress-plugin-smooth-scroll',
    'demo-container',
  ]
}
