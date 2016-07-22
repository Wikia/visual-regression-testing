var extend = require('extend');

function load(mocha, customTestCase) {
	var defaultTestCase = {
		name: getName(mocha),
		group: getGroup(mocha),
		browser: 'chrome',
		useMobile: false,
		updateBaseline: false,
		// webdrivercss doesn't accept 0
		// see https://github.com/webdriverio/webdrivercss/blob/v1.1.10/lib/webdrivercss.js#L29
		misMatchTolerance: 0.0001,
		timeout: 999999
	}, testCase, custom = customTestCase || {};

	testCase = extend(defaultTestCase, custom);

	return testCase;
}

function getName(mocha) {
	return mocha.test.title.trim().replace(/([A-Z])/g, '-$1').replace(/[-_\s]+/g, '-').toLowerCase();
}

function getGroup(mocha) {
	return mocha.test.parent.fullTitle().trim().replace(/([A-Z])/g, '-$1').replace(/[-_\s]+/g, '-').toLowerCase();
}

module.exports = {
	load: load
};
