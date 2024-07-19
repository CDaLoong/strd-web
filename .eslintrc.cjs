module.exports = {
  extends: ['next', 'next/core-web-vitals', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error'],
    semi: ['warn', 'never'], // 禁止尾部使用分号
    'no-var': 'error', // 禁止出现 var，用 let 和 const 代替
    eqeqeq: 'warn', // 要求使用 === 和 !==
    curly: 'warn', // 要求所有控制语句使用一致的括号风格
    'no-console': 'warn', // 禁止使用 console
    'no-debugger': 'error', // 禁止使用 debugger
    'no-undef': 'warn', // 禁止使用未声明的变量
    'no-unused-vars': [
      'warn',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: false }
    ], // 禁止出现未使用的变量
    quotes: ['error', 'single'], // 强制使用单引号
    indent: ['error', 2], // 强制使用2空格缩进
    'linebreak-style': ['error', 'unix'], // 强制使用unix换行风格
    'prefer-const': [
      'error',
      { destructuring: 'all', ignoreReadBeforeAssign: true }
    ], // 要求使用const
    'arrow-spacing': ['error', { before: true, after: true }] // 强制箭头函数空格
  }
}
