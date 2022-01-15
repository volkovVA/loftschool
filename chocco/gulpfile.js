const { src, dest, task, series, watch, parallel } = require('gulp');
const rm = require('gulp-rm');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
const sassGlob = require('gulp-sass-glob');
const autoprefixer = require('gulp-autoprefixer');
// const px2rem = require('gulp-smile-px2rem');
const gcmq = require('gulp-group-css-media-queries');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
// const svgo = require('gulp-svgo');
// const svgSprite = require('gulp-svg-sprite');
const gulpif = require('gulp-if');
const imagemin = require('gulp-imagemin');

const env = process.env.NODE_ENV;

const {SRC_PATH, DIST_PATH, STYLE_LIBS, JS_LIBS, SLICK_LIBS, SLICK_LIBS_CSS, FULLPAGE_LIBS, FULLPAGE_LIBS_CSS} = require('./gulp.config');

sass.compiler = require('node-sass');

task('clean', () => {
    return src( `${DIST_PATH}/**/*`, { read: false })
    .pipe( rm() );
  });

task('copy:html', () => {
        return src(`${SRC_PATH}/*.html`)
        .pipe(dest(DIST_PATH)).
        pipe(reload({stream: true}));
    });

task('copy:fonts', () => {
        return src(`${SRC_PATH}/fonts/*`)
        .pipe(dest(`${DIST_PATH}/fonts`))
        .pipe(reload({stream: true}));
    });

task('copy:video', () => {
        return src(`${SRC_PATH}/video/*`)
        .pipe(dest(`${DIST_PATH}/video`))
        .pipe(reload({stream: true}));
    });

task('images', () => {
        return src(`${SRC_PATH}/img/**/*`)
        .pipe(dest(`${DIST_PATH}/img`))
        .pipe(reload({stream: true}))
        .pipe(imagemin());
    });

task('styles', () => {
        return src([...STYLE_LIBS, ...SLICK_LIBS_CSS, ...FULLPAGE_LIBS_CSS, 'src/css/main.scss',])
            .pipe(gulpif(env === 'dev', sourcemaps.init()))
            .pipe(concat('main.scss'))
            .pipe(sassGlob())
            .pipe(sass().on('error', sass.logError))
            // .pipe(px2rem())
            .pipe(gulpif(env === 'dev', autoprefixer ({
                cascade: false
            })))
            .pipe(gulpif(env === 'prod', gcmq()))
            .pipe(gulpif(env === 'prod', cleanCSS()))
            .pipe(gulpif(env === 'dev', sourcemaps.write()))
            .pipe(dest('dist/css'))
            .pipe(reload({stream: true}));
    });

task('scripts', () => {
    return src('src/js/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat('main.js', {newLine:';'}))
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(dest('dist/js'))
        .pipe(reload({stream:true}));
})

task('scriptsVendors', () => {
    return src([...JS_LIBS, ...SLICK_LIBS, ...FULLPAGE_LIBS])
        .pipe(sourcemaps.init())
        .pipe(concat('vendors.js'))
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(dest('dist/js'))
        .pipe(reload({stream:true}));
})

// task('icons', () =>{
//     return src('src/img/**/*.svg')
//         .pipe(svgo({
//             plugins: [
//                 {
//                     removeAttrs: {attrs: '(fill|stroke|style|width|height|data.*)'}
//                 }
//             ]
//         }))
//         .pipe(svgSprite({
//             symbol: {
//                 sprite: '../sprite.svg'
//             }
//         }))
//         .pipe(dest('dist/images/icons'));
// })

task('server', () => {
     browserSync.init({
        server: {
             baseDir: "./dist"
        },
        open: true
     });
 });    

task ('watch', () => {
    watch('./src/css/**/*.scss', series('styles'));
    watch('./src/*.html', series('copy:html'));
    watch('./src/js/*.js', series('scripts'));
    // watch('./src/img/**/*.svg', series('icons'));
})


task('default',
    series('clean', parallel('copy:html', 'copy:fonts', 'copy:video', 'images', 'styles', 'scripts', 'scriptsVendors'), 
    parallel('watch', 'server')));
    
task('build',
    series('clean', parallel('copy:html', 'copy:fonts', 'copy:video', 'images', 'styles', 'scripts', 'scriptsVendors')));

