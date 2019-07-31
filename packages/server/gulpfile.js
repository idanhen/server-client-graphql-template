const {task} = require('gulp');

function defaultTask(cb) {
  // place code for your default task here
  cb();
}

task('run', ['backend-watch', 'frontend-watch'], function () {
  nodemon({
    execMap: {
      js: 'node'
    },
    script: path.join(__dirname, 'build/backend'),
    ignore: ['*'],
    watch: ['foo/'],
    ext: 'noop'
  }).on('restart', function () {
    console.log('Patched!');
  });
});

exports.default = defaultTask