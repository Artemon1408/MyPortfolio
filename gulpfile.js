const gulp = require("gulp");
const webpack = require("webpack-stream");
const browserSync = require("browser-sync");
const sass = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css");
const autoprefixer = require("gulp-autoprefixer");
const rename = require("gulp-rename");
const imagemin = require("gulp-imagemin");
const htmlmin = require("gulp-htmlmin");

const dist = "./dist/";
// const dist = "C:/OpenServer/domains/localhost";

gulp.task("server", function () {
  browserSync({
    server: {
      baseDir: "dist",
    },
  });

  gulp.watch("src/*.html").on("change", browserSync.reload);
});

gulp.task("styles", function () {
  return gulp
    .src("src/assets/sass/**/*.+(scss|sass)")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(rename({ suffix: ".min", prefix: "" }))
    .pipe(autoprefixer())
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(gulp.dest(dist + "/assets/css"))
    .pipe(browserSync.stream());
});

gulp.task("build-js", function () {
  return gulp
    .src("./src/js/main.js")
    .pipe(
      webpack({
        mode: "development",
        output: {
          filename: "script.js",
        },
        watch: false,
        devtool: "source-map",
        module: {
          rules: [
            {
              test: /\.m?js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: "babel-loader",
                options: {
                  presets: [
                    [
                      "@babel/preset-env",
                      {
                        debug: true,
                        corejs: 3,
                        useBuiltIns: "usage",
                      },
                    ],
                  ],
                },
              },
            },
          ],
        },
      })
    )
    .pipe(gulp.dest(dist))
    .on("end", browserSync.reload);
});

gulp.task("watch", function () {
  gulp.watch("src/assets/sass/**/*.+(scss|sass|css)", gulp.parallel("styles"));
  gulp.watch("src/*.html").on("change", gulp.parallel("html"));
  gulp.watch("./src/js/**/*.js", gulp.parallel("build-js"));
});

gulp.task("html", function () {
  return gulp
    .src("src/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest(dist));
});

gulp.task("fonts", function () {
  return gulp
    .src("src/assets/fonts/**/*")
    .pipe(gulp.dest(dist + "/assets/fonts"));
});

gulp.task("icons", function () {
  return gulp
    .src("src/assets/icons/**/*")
    .pipe(gulp.dest(dist + "/assets/icons"));
});

gulp.task("mailer", function () {
  return gulp.src("src/api/mailer/**/*").pipe(gulp.dest(dist + "/api/mailer"));
});

gulp.task("images", function () {
  return gulp
    .src("src/assets/images/**/*")
    .pipe(imagemin())
    .pipe(gulp.dest(dist + "/assets/images"));
});

gulp.task(
  "build",
  gulp.parallel(
    "watch",
    "server",
    "styles",
    "fonts",
    "icons",
    "mailer",
    "images",
    "html",
    "build-js"
  )
);

gulp.task("prod", () => {
  return gulp
    .src("./src/js/main.js")
    .pipe(
      webpack({
        mode: "production",
        output: {
          filename: "script.js",
        },
        module: {
          rules: [
            {
              test: /\.m?js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: "babel-loader",
                options: {
                  presets: [
                    [
                      "@babel/preset-env",
                      {
                        corejs: 3,
                        useBuiltIns: "usage",
                      },
                    ],
                  ],
                },
              },
            },
          ],
        },
      })
    )
    .pipe(gulp.dest(dist));
});

gulp.task("default", gulp.parallel("watch", "build"));
