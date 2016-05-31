var gulp = require('gulp');
var selenium = require('selenium-standalone');

gulp.task('selenium', function (done) {
    selenium.install({
        logger: function (message) {
        }
    }, function (err) {
        if (err) return done(err);

        selenium.start(function (err, child) {
            if (err) return done(err);
            selenium.child = child;
            done();
        });
    });
});

gulp.task('default', ['selenium'], function() {
    // place code for your default task here
});
