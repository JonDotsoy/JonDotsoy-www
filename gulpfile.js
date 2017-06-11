import gulp from 'gulp'
import fs from 'fs'

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
  gulp.watch(['src/templates/**/*.pug', 'src/schema.json'], ['templates'])
})

gulp.task('templates', () => (
  gulp.src(['src/templates/*.pug'])
  .pipe(require('gulp-pug')({
    locals: {
      schema: JSON.parse(fs.readFileSync('src/schema.json'))
    }
  }))
  .pipe(gulp.dest('www'))
  .pipe(bs.stream())
))

gulp.task('copy-favicons', () => (
  gulp.src(['src/favicons/**/*'])
  .pipe(gulp.dest('www'))
  .pipe(bs.stream())
))

gulp.task('copy-brand', () => (
  gulp.src(['src/brand/logo.png'])
  .pipe(gulp.dest('www/imgs'))
))

gulp.task('manifest', () => (
  gulp.src(['src/manifest/**/*'])
  .pipe(require('gulp-ejs')(process.env))
  .pipe(gulp.dest('www'))
  .pipe(bs.stream())
))

gulp.task('manifest:watch', ['manifest'], () => (
  gulp.watch(['src/manifest/**/*'], ['manifest'])
))

gulp.task('watch', [
  'copy-favicons',
  'manifest:watch',
  'styles:watch',
  'templates:watch',
  'browser-sync',
])

gulp.task('build', [
  'copy-favicons',
  'styles',
  'manifest',
  'templates',
])

function handleStylesError (err) {
  console.log(err.stack.toString())
  this.emit('end')
}
