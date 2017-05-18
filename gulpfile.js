import gulp from 'gulp'

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
  .pipe(gulp.dest('dest/styles'))
))

gulp.task('templates:watch', ['templates'], () => {
  gulp.watch(['src/templates/**/*.pug'], ['templates'])
})

gulp.task('templates', () => (
  gulp.src(['src/templates/*.pug'])
  .pipe(require('gulp-pug')())
  .pipe(gulp.dest('dest'))
))

gulp.task('copy-favicons', () => (
  gulp.src(['src/favicons/**/*'])
  .pipe(gulp.dest('dest'))
))

gulp.task('watch', [
  'copy-favicons',
  'styles:watch',
  'templates:watch',
])

gulp.task('build', [
  'copy-favicons',
  'styles',
  'templates',
])
