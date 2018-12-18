import gulp  from 'gulp';
import del from 'del';
import config from './config';

function cleanDist(done) {
  del([config.destinationFolder]).then(() => done());
}

// Remove the built files
gulp.task('clean', cleanDist);
