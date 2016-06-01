var path = require('path');
var extend = require('extend');

var testCase = {
    url: "http://pl.wikia.com",
    name: 'wikia'
};

var visualsPath = path.relative('./tests', __dirname);
var webdrivercssConfig = {
    screenshotRoot: path.join('./visuals', visualsPath, testCase.name),
    failedComparisonRoot: path.join('./visuals/', visualsPath, testCase.name, 'diff')
};

var options = {
    desiredCapabilities: {
        browserName: 'chrome'
    },
    logLevel: 'verbose'
};

if (testCase.device === 'mobile') {
    options = extend(options, {
        desiredCapabilities: {
            chromeOptions: {
                mobileEmulation: {
                    deviceName: 'Google Nexus 5'
                }
            }
        }
    })
}

var client = require('webdriverio').remote(options);

require('webdrivercss').init(client, webdrivercssConfig);


client
    .init(webdrivercssConfig)
    .url(testCase.url)
    .webdrivercss(testCase.name, {
        //@TODO it shouldn't be necessary
        name: testCase.name
    })
    .end();
