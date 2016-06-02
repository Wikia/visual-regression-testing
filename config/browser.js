function getConfig(browser, useMobile, logLevel) {
    var options = {
        desiredCapabilities: {
            browserName: browser || 'chrome'
        },
        logLevel: logLevel || 'verbose'
    };

    if (useMobile) {
        options.desiredCapabilities.chromeOptions = {
            mobileEmulation: {
                deviceName: 'Google Nexus 5'
            }
        }
    }

    return options;
}

module.exports = {
    getConfig: getConfig
};
