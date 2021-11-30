const element = <div>babel test</div>
const text = `element type is ${element.type}`
const add = (a,b) => a + b

/**
 * npx babel src/code.js --presets=@babel/preset-react --plugins=@babel/plugin-transform-template-literals,@babel/plugin-transform-arrow-functions 
 * bebel/cli , babel-loader는 bable/core를 사용 
 */
