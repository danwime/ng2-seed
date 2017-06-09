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
var webpack = require('webpack');
var webpackStream = require('webpack-stream');
var runSequnce = require('run-sequence');

//构建配置
var config = {};
//成品输出地址
config.dist = 'dist';

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

//静态资源文件
config.static = [
  'package.json',
  'web/**/*',
  '!web/app/**/*',
  '!web/**/*.ts',
  '!**/*_tmp___',
  '!**/*_old___'
];

//babel配置
config.babel = {
  plugins: [
    'transform-decorators-legacy',
    'transform-export-extensions',
    'transform-es2015-modules-commonjs'
  ],
  presets: ['stage-0']
};

//清理任务
gulp.task('clean', clean(config.dist));

//服务端编译任务
gulp.task('compile:server', babel(config.src, config.dist, config.babel));
gulp.task('compile:server:dev', babel(config.src, config.dist, true, Object.assign({sourceMaps: 'inline'}, config.babel)));

//客户端webpack打包任务
gulp.task('compile:client', function () {
  var webpackConfig = require('./webpack.prod');
  return gulp.src(['web/main.ts'])
    .pipe(webpackStream(webpackConfig, webpack).on('error', () => true))
    .pipe(gulp.dest(config.dist + '/web/bundles/'));
});
gulp.task('compile:client:dev', function () {
  var webpackConfig = require('./webpack.dev');
  return gulp.src(['web/main.ts'])
    .pipe(webpackStream(webpackConfig, webpack).on('error', () => true))
    .pipe(gulp.dest(config.dist + '/web/bundles/'));
});

//静态资源同步任务
gulp.task('sync', sync(config.static, config.dist));
gulp.task('sync:dev', sync(config.static, config.dist, true));

//文件压缩优化
gulp.task('optimize:css', minicss(config.dist + '/web/libs/**/*.css'));
gulp.task('optimize:js', minijs(config.dist + '/web/libs/**/*.js'));

//开发构建
gulp.task('build:dev', function (done) {
  runSequnce('clean', ['compile:server:dev', 'compile:client:dev', 'sync:dev'], done);
});

//产品构建
gulp.task('build', function (done) {
  runSequnce('clean', ['compile:server', 'compile:client'], 'sync', ['optimize:css', 'optimize:js'], done);
});

//默认构建任务
gulp.task('default', ['build:dev']);