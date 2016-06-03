var Mocha = require('mocha'),
	fs = require('fs'),
	path = require('path'),
	selenium = require('selenium-standalone'),

	mocha = new Mocha({
		timeout: 99999
	}),
	testDir = path.resolve('./tests'),
	seleniumServer;

function runMocha() {
// Add each .js file to the mocha instance
	fs.readdirSync(testDir).filter(function (file) {
		// Only keep the .js files
		return file.substr(-3) === '.js';

	}).forEach(function (file) {
		mocha.addFile(
			path.join(testDir, file)
		);
	});

// Run the tests.
	mocha.run(function (failures) {
		seleniumServer.kill();
		process.exit(failures);  // exit with non-zero status if there were failures
	});
}

function runSelenium() {
	selenium.install(
		{logger: console.log},
		function () {
			selenium.start(function (err, child) {
				if (err) {
					process.exit(err);
				}
				seleniumServer = child;
				runMocha();
			});
		});
}

function run() {
	runSelenium();
}

module.exports = {
	run: run
};
