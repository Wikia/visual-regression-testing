var assert = require('chai').assert;
var webdriverio = require('webdriverio');
var config = require('../config/config');
var webdrivercss = require('webdrivercss');

describe('fandom test', function() {
    var conf, client;

    before(function() {
        var testCase = {
            browser: 'chrome',
            useMobile: true,
            group: 'fandom-mocha',
            url: 'https://fandom.wikia.com',
            name: 'sample'
        };

        conf = config.loadConfig(testCase);
        client = webdriverio.remote(conf.browser);
        webdrivercss.init(client, conf.webdrivercss);
    });

    it('Fandom Test', function(done) {
        client
            .init()
            .url(testCase.url)
            .webdrivercss(testCase.group, conf.webdrivercssTestCase, function(err, resp) {
                assert.equal(0, resp[testCase.name][0].misMatchPercentage, 'Mismatch percentage different than 0');
                assert.isOk(resp[testCase.name][0].isExactSameImage);
            })
            .call(done);
    });

    after(function(done) {
        client.end(done);
    });
});
