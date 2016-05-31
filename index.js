var client = require('webdriverio').remote({desiredCapabilities:{browserName: 'chrome'}});
var resemble = require('resemblejs');

client
    .init()
    .url('http://fandom.wikia.com')
    .saveScreenshot('a')
    .webdrivercss('fandom', [{
        name: 'fandom',
        elem: 'body'
    }],function(err, res) {
        console.log(err);
        console.log(res);
        // assert.ifError(err);
        // assert.ok(res.header[0].isWithinMisMatchTolerance);
        // assert.ok(res.hero[0].isWithinMisMatchTolerance);
    })
    .end();
