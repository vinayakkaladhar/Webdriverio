const allure = require('allure-commandline')
exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || 'vinayakkaladhar_cxOHyz',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'suShViqhF6pgnoiepJjJ',

  updateJob: false,
  specs: [
    './examples/run-first-test/specs/first_test.js'
  ],
  exclude: [],
  reporters: [['allure', {
    outputDir: 'allure-results',
    disableWebdriverStepsReporting: false,
    disableWebdriverScreenshotsReporting: false
}]],
  capabilities: [{
    project: "First Webdriverio Android Project",
    build: 'Webdriverio Android',
    name: 'first_test',
    device: 'Google Pixel 3',
    os_version: "9.0",
    app: process.env.BROWSERSTACK_APP_ID || 'bs://000aa3be74787c0a1cbb68eaf06659075a923c67',
    'browserstack.debug': true,
    'browserstack.autoGrantPermissions': true
  }],
  afterTest: function (
    test,
    context,
    { error, result, duration, passed, retries }
  ) {
    // take a screenshot anytime a test fails and throws an error
      browser.takeScreenshot();
  },
  onComplete: function() {
    const reportError = new Error('Could not generate Allure report')
    const generation = allure(['generate', 'allure-results', '--clean'])
    return new Promise((resolve, reject) => {
        const generationTimeout = setTimeout(
            () => reject(reportError),
            5000)

        generation.on('exit', function(exitCode) {
            clearTimeout(generationTimeout)

            if (exitCode !== 0) {
                return reject(reportError)
            }

            console.log('Allure report successfully generated')
            resolve()
        })
    })
},
  logLevel: 'info',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,

  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 20000
  }
};
