var gulp = require('gulp');
var selenium = require('selenium-standalone');
var mocha = require('gulp-mocha');


var seleniumServer;

gulp.task('selenium', function (done) {

    selenium.install(
        {logger: console.log},
        function () {
            selenium.start(function (err, child) {
                if (err) {
                    return done(err)
                }
                seleniumServer = child;
                done();
            });
    });
});

gulp.task('test', ['selenium'], function () {
    return gulp.src('tests/*.js', {read: false})
        .pipe(mocha()).once('error', function () {
            process.exit(1);
        })
        .once('end', function () {
            process.exit();
        });
});

gulp.task('default', ['test'], function() {
    seleniumServer.kill();
});
// gulp.task('test', ['selenium'], function() {
//     // place code for your default task here
// });
