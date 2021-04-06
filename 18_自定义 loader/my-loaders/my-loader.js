const { getOptions } = require("loader-utils");
const { validate } = require("schema-utils");
const schema = require("../schema/schema.json");

/// TODO: webpack 5 之后通过this.getOptions() 来获取参数，不再需要使用 loader-utils 库
// TODO: 此处的 函数不能写箭头函数
module.exports = function (content) {
  const options = getOptions(this);
  // console.log(this);

  // 校验参数是否正确
  validate(schema, options);
  console.log("options:", this.getOptions());
  const callback = this.async();

  setTimeout(() => {
    callback(null, content + 123);
  }, 1000);

  // 自定义loader
  // return content + 123;
};
