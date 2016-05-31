var client = require('webdriverio').remote({
    desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
            mobileEmulation: {
                deviceName: 'Google Nexus 5'
            }
        }
    },
    logLevel: 'verbose'
});

require('webdrivercss').init(client);


var testCase = {
    url: "http://fandom.wikia.com",
    resolution: {
        width: 768,
        height: 1024
    },
    name: 'fandom',
    elements: {
        name: 'body',
        elem: 'body'
    }
};

client
    .init()
    .url(testCase.url)
    .webdrivercss(testCase.name, testCase.elements
    )
    .end();
