const { NodeSSH } = require("node-ssh");

module.exports = class UplodaFile {
  constructor() {
    // console.log("compile", compile);
  }

  apply(compiler) {
    compiler.hooks.afterEmit.tap("UplodaFile", (res) => {
      // console.log("输出完成",res);pnpm

      NodeSSH.connect({
        // host:
      })
    });
    console.log("output path", compiler.options.output.path);
    // console.log("apply compile", compile);
    // compile.hooks
  }
};
