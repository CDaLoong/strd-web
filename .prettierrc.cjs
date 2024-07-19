module.exports = {
  tabWidth: 2,  // 指定每个缩进级别的空格数
  useTabs: false,  // 使用制表符而不是空格缩进行
  semi: false,  // 在语句末尾不打印分号
  singleQuote: true,  // 使用单引号而不是双引号
  quoteProps: 'as-needed',  // 仅在需要时为对象属性加引号
  trailingComma: 'none',  // 多行时不打印尾随逗号
  bracketSpacing: true,  // 在对象字面量的花括号之间打印空格
  arrowParens: 'avoid',  // 在单参数箭头函数参数周围省略括号
  rangeStart: 0,  // 格式化文件的开始位置
  rangeEnd: Infinity,  // 格式化文件的结束位置
  requirePragma: false,  // 不需要在文件头部插入 @prettier 或 @format 标记
  insertPragma: false,  // 不自动在文件头部插入 @prettier 或 @format 标记
  proseWrap: 'never',  // 不换行Markdown文本
  htmlWhitespaceSensitivity: 'css',  // HTML文件中的空格敏感度依赖于CSS
  vueIndentScriptAndStyle: false,  // 不缩进Vue文件中的script和style标签
  endOfLine: 'lf'  // 使用 \n 作为换行符
}