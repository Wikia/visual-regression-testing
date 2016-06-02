var webdrivercss = require('./webdrivercss');
var browser = require('./browser');


function loadConfig(testCase) {
    return config = {
        webdrivercss: webdrivercss.getConfig(testCase.group),
        browser: browser.getConfig(testCase.browser, testCase.useMobile, 'verbose'),
        webdrivercssTestCase: {
            name: testCase.name
        }
    }
}


module.exports = {
    loadConfig: loadConfig
};
