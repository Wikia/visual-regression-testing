var assert = require('chai').assert;
var webdriverio = require('webdriverio');

describe('my webdriverio tests', function(){

    var client = {};

    before(function(done){
        client = webdriverio.remote({ desiredCapabilities: {browserName: 'chrome'} });
        client.init(done);
    });

    it('Github test',function(done) {
        client
            .url('https://github.com/')
            .getTitle(function(err, title) {
                assert(err === undefined);
                assert.equal(title, 'How people build software · GitHub');
            })
            .call(done);
    });

    after(function(done) {
        client.end(done);
    });
});
