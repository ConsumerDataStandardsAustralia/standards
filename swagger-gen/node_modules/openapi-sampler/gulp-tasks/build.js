import gulp  from 'gulp';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import path from 'path';

import config from './config';

const $ = global.$;

function build() {
  return browserify({
      standalone: 'OpenAPISampler',
      entries: [path.join('src', config.entryFileName + '.js')]
    })
    .transform('babelify', {presets: ['es2015']})
    .bundle()
    .pipe(source(config.exportFileName + '.js'))
    .pipe(gulp.dest(config.destinationFolder))
    .pipe(buffer())
    .pipe($.filter(['*', '!**/*.js.map']))
    .pipe($.rename(config.exportFileName + '.min.js'))
    .pipe($.sourcemaps.init({ loadMaps: true }))
    .pipe($.uglify())
    .pipe($.sourcemaps.write('./'))
    .pipe(gulp.dest(config.destinationFolder));
}

gulp.task('build', ['lint', 'clean'], build);
