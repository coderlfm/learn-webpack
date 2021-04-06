# tree shaking 摇树

最早起源于 LISP 语言，而非 rollup 

js 中 最早起源于 rollup
webpack4 中 对 es module 中支持 tree shaking

webpack5 中对部分 commonJS 中也有部分支持

## 两种不同方式 配置

## usedExports
1.标记某些函数是否被使用，标记未使用的注释 
/* unused harmony export abc */

2. 结合之后使用 terset来进行优化

## sideEffects
跳过整个模块/文件，直接查看该文件是否副作用

相当于默认是 true，
设置为 false 表示 所有模块都没有副作用，
通过 import '' 的方式会被全部删除，

  "sideEffects":false,
表示所有的代码都没有副作用

1.设置为 数组的方式
``` json
  "sideEffects":[
    "./src/format.js",
    "./src/style.css"
  ],
```

2.过滤所有的 css

``` json
"sideEffects":[
  './src/index.css',
  '**.css'
]
```

3. 通过以上方式还是较为麻烦，设置css 可以直接在 loader 的 rule 中配置
  "sideEffects": false,
  
3.1 匹配到 css 是 把 sidEeffects 设置为 true
``` js
   // 所有的css 都是有副作用的，不需要 tree shaking
   sideEffects: true,
```


react 脚手架配置了 css 防止 css tree shaking 


### 默认生成模式已经开启了 tree shaking



## css 的 tree shaking 

早期使用 purifyCss 插件， 4年前已经停止更新了

### purgeCSS 清除css
也是一个独立的工具

webpack 没有帮我做 css的 tree shaking

``` shell
yarn add --sev purgecss-webpack-plugin
```


### 使用 glob 来帮我们使用正则来匹配一下文件或者文件夹

glob 不用单独安装，其他库已经对它有依赖

配置安全区
flob.sync(`绝对路径/**/*`,{
nodir:true
})

glob 返回 standrd

## 生产环境 gzip 压缩
开发环境如果需要配置在 devServe 中配置

``` shell
yarn add --dev compression-webpack-plugin
```

默认会为 所有压缩后能达到原大小 0.8 的文件进行 gzip 的压缩，
如果我们不希望对 .map 文件 或者 index.html 文件进行压缩，需要进行配置以下方式

``` js
test:/(css|.jss)$/i,
```



