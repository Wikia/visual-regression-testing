var webdriverio = require('webdriverio'),
	webdrivercss = require('webdrivercss');

function loadClient(config) {
	var client = webdriverio.remote(config.browser);
	webdrivercss.init(client, config.webdrivercss);

	return client;
}

module.exports = {
	loadClient: loadClient
};
