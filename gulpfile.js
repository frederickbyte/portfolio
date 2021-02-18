const { parallel, watch } = require('gulp');
// Get fonts
const fonts = require('./gulp-tasks/fonts.js');
// Handle images
const images = require('./gulp-tasks/images.js');
// Pull in each task
const sass = require('./gulp-tasks/sass.js');

// Set each directory and contents that we want to watch and
// assign the relevant task. `ignoreInitial` set to true will
// prevent the task being run when we run `gulp watch`, but it
// will run when a file changes.
const watcher = () => {
  watch('./src/scss/**/*.scss', { ignoreInitial: true }, sass);
  watch('./src/images/**/*', { ignoreInitial: true }, images);
};

// Run each task in parrallel
exports.default = parallel(fonts, images, sass);

exports.watch = watcher;
