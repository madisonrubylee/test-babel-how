const babel = require('@babel/core')
const fs = require('fs')

const filename = './src/code.js'
// 컴파일할 파일의 내용을 가져옴 
const source = fs.readFileSync(filename, 'utf8')
//바벨 플러그인과 프리셋 설정 
const presets = ['@babel/preset-react']
const plugins = [
    '@babel/plugin-transform-template-literals',
    '@babel/plugin-transform-arrow-functions',
]
// 바벨 실행 
const { code } = babel.transformSync(source, {
    filename,
    presets,
    plugins,
    // babel.config.js 설정파일 사용하지 않도록 한다 
    configFile: false,
})
//변환된 코드 출력 
console.log(code) 