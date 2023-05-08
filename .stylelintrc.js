module.exports = {
  extends: ['stylelint-config-recommended-less'],
  "plugins": [
    "stylelint-order"
  ],
  rules: {
    // 忽略rpx校验
    'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
    // 选择器重复校验关闭
    'no-duplicate-selectors': null,
    // 忽略属性简写
    'declaration-block-no-shorthand-property-overrides': null,
    // 忽略空文件校验
    'no-empty-source': null,
    'max-line-length': null,
    // 类选择器的命名规则
    'selector-class-pattern': '.',
    // 指定字符串使用单引号或双引号 "single"|"double"
    'string-quotes': 'single',
    // 颜色指定大写
    'color-hex-case': 'upper',
    // 禁止空块
    'block-no-empty': true,
    'function-comma-space-after': null,
    // 颜色6位长度
    'color-hex-length': 'long',
    'max-empty-lines': 3,
    'declaration-block-no-redundant-longhand-properties': [
      true,
      {
        ignoreShorthands: ['flex-flow', '/border/']
      }
    ],
    // 兼容自定义标签名
    'selector-type-no-unknown': [
      true,
      {
        ignoreTypes: ['page', 'recycle-item', 'view', 'swiper-item', 'text', 'swiper', 'scroll-view'],
      },
    ],
    // 忽略伪类选择器 ::v-deep
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['/./', 'v-deep', '-webkit-'],
      },
    ],
    'declaration-block-semicolon-newline-after': null,
    // 禁止低优先级的选择器出现在高优先级的选择器之后。
    'no-descending-specificity': null,
    // 禁止空注释
    'comment-no-empty': true,
    // 禁止简写属性的冗余值
    'shorthand-property-no-redundant-values': true,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['/./', '-webkit-'],
      },
    ],
    // 禁止值的浏览器引擎前缀
    'value-no-vendor-prefix': [
      true,
      {
        ignoreValues: 'box',
      },
    ],
    // 禁止属性的浏览器引擎前缀
    'property-no-vendor-prefix': null,
    // 禁止小于 1 的小数有一个前导零
    'number-leading-zero': null,
    // 属性的排序
    "order/properties-order": [
      "position",
      "top",
      "right",
      "bottom",
      "left",
      "z-index",
      "display",
      "justify-content",
      "align-items",
      "float",
      "clear",
      "overflow",
      "overflow-x",
      "overflow-y",
      "margin",
      "margin-top",
      "margin-right",
      "margin-bottom",
      "margin-left",
      "border",
      "border-style",
      "border-width",
      "border-color",
      "border-top",
      "border-top-style",
      "border-top-width",
      "border-top-color",
      "border-right",
      "border-right-style",
      "border-right-width",
      "border-right-color",
      "border-bottom",
      "border-bottom-style",
      "border-bottom-width",
      "border-bottom-color",
      "border-left",
      "border-left-style",
      "border-left-width",
      "border-left-color",
      "border-radius",
      "padding",
      "padding-top",
      "padding-right",
      "padding-bottom",
      "padding-left",
      "width",
      "min-width",
      "max-width",
      "height",
      "min-height",
      "max-height",
      "font-size",
      "font-family",
      "font-weight",
      "text-align",
      "text-justify",
      "text-indent",
      "text-overflow",
      "text-decoration",
      "white-space",
      "color",
      "background",
      "background-position",
      "background-repeat",
      "background-size",
      "background-color",
      "background-clip",
      "opacity",
      "filter",
      "list-style",
      "outline",
      "visibility",
      "box-shadow",
      "text-shadow",
      "resize",
      "transition"
    ],
  },
  ignoreFiles: ['dist/**/*', '*.json'],
};
