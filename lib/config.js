var webdrivercss = require('./webdrivercss'),
	browser = require('./browser'),
	testCase = require('./testCase');


function loadConfig(testCase) {
	return {
		webdrivercss: webdrivercss.getConfig(testCase.group),
		browser: browser.getConfig(testCase.browser, testCase.useMobile, 'verbose'),
		webdrivercssTestCase: [{
			name: testCase.name
		}]
	}
}


module.exports = {
	loadConfig: loadConfig
};
