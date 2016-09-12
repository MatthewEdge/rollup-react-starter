var gulp = require('gulp');
var inject = require('gulp-inject');

var webserver = require('gulp-webserver');
var shell = require('gulp-shell');

var path = require('path');

// Dev server
gulp.task('server', function() {
  gulp.src('./build')
    .pipe(webserver({
      livereload: false,
      open: true
    }));
});

// Integrate with existing Rollup config by just executing the shell task
gulp.task('rollup', shell.task([
  'rollup -c'
]));

// Inject bundled JS directly into the final HTML file
gulp.task('inject-bundle', function() {
  gulp.src('./index.html')
    .pipe(
      inject(
        gulp.src(['./build/main.min.js']), {
          starttag: '<!-- inject:js -->',
          endtag: '<!-- endinject -->',
          transform: function (filePath, file) {
            // return file contents as string
            return '<script type=\'text/javascript\'>' + file.contents.toString('utf8') + '</script>'
          }
        }
      )
    )
    .pipe(gulp.dest('./build'));
});

// In reverse order because last to first execution
gulp.task('default', ['server', 'inject-bundle', 'rollup']);