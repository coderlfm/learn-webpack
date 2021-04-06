const { src, dest, series, parallel, watch } = require("gulp");
const teser = require("gulp-terser");
const del = require("delete");

function build() {
  return src("./src/**/*.js").pipe(teser()).pipe(dest("./build"));
}

function clean(cb) {
  del(["./build"], () => {
    cb();
  });
}

function js(cb) {
  console.log("js 任务执行完毕");
  cb();
}

function css(cb) {
  console.log("css 任务执行完毕");
  cb();
}

watch("src/**/*.js", build);

exports.build = build;
exports.default = parallel(clean, build);
