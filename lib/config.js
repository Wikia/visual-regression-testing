var webdrivercss = require('./webdrivercss'),
	browser = require('./browser');

function loadConfig(testCase) {
	return {
		webdrivercss: webdrivercss.getConfig(testCase.group, testCase.screenWidth),
		browser: browser.getConfig(testCase.browser, testCase.useMobile, 'verbose'),
		webdrivercssTestCase: [{
			name: testCase.name
		}]
	}
}

module.exports = {
	loadConfig: loadConfig
};
