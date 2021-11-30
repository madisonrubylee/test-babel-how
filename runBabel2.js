const babel = require('@babel/core')
const fs = require('js')

const filename = './src/code.js'
const source = fs.readFileSync(filename, 'utf8')
const presets = ['@babel/preset-react']

// AST생성 
const { ast } = babel.transformSync(source, {
    filename,
    presets,
    ast: true,
    code: false,
    plugins,
    // babel.config.js 설정파일 사용하지 않도록 한다 
    configFile: false,
})

// AST의 첫번째 플러그인이 반영된 코드 생성 
const { code: code1 } = babel.transformFromAstSync(ast, source, {
    filename,
    plugins: ['@babel/plugin-transform-template-literals'],
    configFile: false,
})

// 두번째 설정이 적용된 코드를 생성 
const { code: code2 } = babel.transformFromAstSync(ast, source, {
    filename,
    plugins: ['@babel/plugin-transform-arrow-functions'],
    configFile: false,
})

console.log('code1:\n', code1)
console.log('code2:\n', code2)
