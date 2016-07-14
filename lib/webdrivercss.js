var path = require('path');

function getConfig(testGroupName, screenWidth, updateBaseline) {
	var options = {
		screenshotRoot: path.join('./visuals', testGroupName),
		failedComparisonRoot: path.join('./visuals/', testGroupName, 'diff'),
		screenWidth: screenWidth
	};

	if (updateBaseline) {
		options.updateBaseline = true;
	}

	return options;
}

module.exports = {
	getConfig: getConfig
};
