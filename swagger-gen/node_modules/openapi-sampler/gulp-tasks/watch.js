import gulp  from 'gulp';
const watchFiles = ['src/**/*', 'test/**/*', 'package.json', '**/.eslintrc', '.jscsrc'];

// Run the headless unit tests as you make changes.
function watch() {
  gulp.watch(watchFiles, ['test']);
}

// Run the headless unit tests as you make changes.
gulp.task('watch', watch);
