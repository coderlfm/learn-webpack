const presets = [
    ['@babel/preset-env'],
    ['@babel/preset-react'],
];

const plugins = []; 

// 通过 process.env 来获取参数
// 该插件只有在开发环境需要使用
if(!process.env.NODE_ENV === 'production'){
    plugins.push(['react-refresh/babel']);
}

module.exports = {
    presets,
    plugins,
}