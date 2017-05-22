import gulp from 'gulp'

const bs = require('browser-sync').create()

gulp.task('browser-sync', (done) => {

  bs.init({
    server: './www'
  })
})

gulp.task('styles:watch', ['styles'], () => {
  gulp.watch(['src/styles/**/*.css'], ['styles'])
})

gulp.task('styles', () => (
  gulp.src(['src/styles/**/*.css'])
  .pipe(require('gulp-postcss')([
    require('postcss-import')(),
    require('precss')(),
    require('postcss-cssnext')(),
  ]))
  .on('error', handleStylesError)
  .pipe(gulp.dest('www/styles'))
  .pipe(bs.stream())
))

gulp.task('templates:watch', ['templates'], () => {
  gulp.watch(['src/templates/**/*.pug'], ['templates'])
})

gulp.task('templates', () => (
  gulp.src(['src/templates/*.pug'])
  .pipe(require('gulp-pug')())
  .pipe(gulp.dest('www'))
  .pipe(bs.stream())
))

gulp.task('copy-favicons', () => (
  gulp.src(['src/favicons/**/*'])
  .pipe(gulp.dest('www'))
  .pipe(bs.stream())
))

gulp.task('watch', [
  'copy-favicons',
  'styles:watch',
  'templates:watch',
  'browser-sync',
])

gulp.task('build', [
  'copy-favicons',
  'styles',
  'templates',
])

function handleStylesError (err) {
  console.log(err.stack.toString())
  this.emit('end')
}
