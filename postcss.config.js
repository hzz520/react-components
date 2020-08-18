module.exports = {
  plugins: [
    require('postcss-write-svg')({
      uft8: false
    }),
    require('postcss-cssnext')({
      browsers: [  // 兼容,不指定默认则是该插件默认范围,最近两个版本
        '>1%',
        'last 4 versions',
        'Firefox ESR',
        'not ie < 9',
      ],
      flexbox: 'no-2009'
    }),
    require('postcss-px-to-viewport')({
      viewportWidth: 1920, // 设计稿宽度
      viewportHeight: 1081, // 设计稿高度，可以不指定
      unitPrecision: 3, // px to vw无法整除时，保留几位小数
      viewportUnit: 'vw', // 转换成vw单位
      selectorBlackList: ['.ignore', '.hairlines'], // 不转换的类名
      minPixelValue: 1, // 小于1px不转换
      mediaQuery: true, // 允许媒体查询中转换
      exclude: /(\/|\\)(node_modules)(\/|\\)/ 
    }),
    require('postcss-viewport-units'),
    require('cssnano')({
      preset: [
        'advanced', 
        {
          discardComments: {
            removeAll: true
          },
          discardUnused: false,
          mergeIdents: false,
          reduceIdents: false,
          safe: true,
          sourcemap: true,
          zindex: false            
        }
      ]
    }),
  ]
}
