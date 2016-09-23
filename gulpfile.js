/**
 * gulp构建脚本
 * Created by demon on 2016/9/23.
 */
var gulp = require('gulp');
var clean = require('gulp-eztasks').clean;
var babel = require('gulp-eztasks').babel;
var minijs = require('gulp-eztasks').minijs;
var minicss = require('gulp-eztasks').minicss;
var sync = require('gulp-eztasks').sync;
var webpack = require('webpack-stream');
var runSequnce = require('run-sequence');

//构建配置
var config = {};
//成品输出地址
config.dist = 'dist';
//客户端webpack配置,使用产品模式,开发模式在express中自动生成
config.webpack = require('./webpack.prod.js');

//服务器代码
config.src = [
  '**/*.js',
  '!webpack.*.js',
  '!gulpfile.js',
  '!node_modules/**',
  '!web/**',
  '!dist/**',
  '!**/*_tmp___',
  '!**/*_old___'
];

//生产模式下的静态资源文件
config.static = [
  'package.json',
  'web/**/*',
  '!web/**/*.ts',
  '!**/*_tmp___',
  '!**/*_old___'
];

//开发模式下的静态资源文件
config.devStatic = [
  'package.json',
  'webpack.dev.js',
  'tsconfig.json',
  '.babelrc',
  'web/**/*',
  '!web/app/**/*.ts',
  '!web/main.ts',
  '!web/vendor.ts',
  '!**/*_tmp___',
  '!**/*_old___'
];

//清理任务
gulp.task('clean', clean(config.dist));

//服务端编译任务
gulp.task('compile:server', babel(config.src, config.dist, {presets: ['danwi']}));
gulp.task('compile:server:dev', babel(config.src, config.dist, true, {presets: ['danwi']}));

//客户端webpack打包任务
gulp.task('compile:client', function () {
  return gulp.src(['web/app/main.ts'])
    .pipe(webpack(config.webpack))
    .pipe(gulp.dest(config.dist + '/web/bundles/'));
});

//静态资源同步任务
gulp.task('sync', sync(config.static, config.dist));
gulp.task('sync:dev', sync(config.devStatic, config.dist, true));

//文件压缩优化
gulp.task('optimize:css', minicss(config.dist + '/web/libs/**/*.css'));
gulp.task('optimize:js', minijs(config.dist + '/web/libs/**/*.js'));

//开发构建
gulp.task('build:dev', function (done) {
  runSequnce('clean', ['compile:server:dev'], 'sync:dev', done);
});

//产品构建
gulp.task('build', function (done) {
  runSequnce('clean', ['compile:server', 'compile:client'], 'sync', ['optimize:css', 'optimize:js'], done);
});

//默认构建任务
gulp.task('default', ['build']);