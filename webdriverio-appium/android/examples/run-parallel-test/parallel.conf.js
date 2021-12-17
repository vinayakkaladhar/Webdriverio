exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || 'vinayakkaladhar_cxOHyz',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'suShViqhF6pgnoiepJjJ',

  updateJob: false,
  specs: [
    './examples/run-parallel-test/specs/single_test.js'
  ],
  exclude: [],

  maxInstances: 10,
  commonCapabilities: {
    project: "First Webdriverio Android Project",
    build: 'Webdriverio Android Parallel',
    name: 'parallel_test',
    app: process.env.BROWSERSTACK_APP_ID || 'bs://527b65a15fdd13e5f04e1dec5d10bc4e90941fe6',
    'browserstack.debug': true
  },

  capabilities: [{
    device: 'Google Pixel 3',
    os_version: "9.0"
  }, {
    device: 'Samsung Galaxy S10e',
    os_version: "9.0"
  }],

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

// Code to support common capabilities
exports.config.capabilities.forEach(function(caps){
  for(var i in exports.config.commonCapabilities) caps[i] = caps[i] || exports.config.commonCapabilities[i];
});
