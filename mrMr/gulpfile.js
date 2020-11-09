"use strict";
// Load plugins
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const gulp = require("gulp");
const header = require("gulp-header");
const plumber = require("gulp-plumber");
const rename = require("gulp-rename");
const sass = require("gulp-sass");

// Load package.json for banner
const pkg = require('./package.json');

// Set the banner content
const banner = ['/*!\n',
  ' * mrStyle ' + pkg.version + '\n',
  ' * Copyright ' + (new Date()).getFullYear(), ' mrApptastic\n',
  ' */\n',
  '\n'
].join('');

// CSS task
function css() {
  return gulp
    .src("./projects/mr-mr2/src/scss/**/*.scss")
    .pipe(plumber())
    .pipe(sass({
      outputStyle: "expanded",
      includePaths: "./node_modules",
    }))
    .on("error", sass.logError)
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(header(banner))
    .pipe(rename({
      suffix: ".min"
    }))
    .pipe(cleanCSS())
    .pipe(gulp.dest("./dist/mr-mr2"))
}

// Define complex tasks
const build = gulp.series(css);

// Export tasks
exports.css = css;
exports.build = build;
exports.default = build;
