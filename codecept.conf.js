exports.config = {
  output: 'evidence',
  helpers: {
    Puppeteer: {
      url: 'http://zero.webappsecurity.com/',
      show: true,
      windowSize: '1200x900'
    }
  },
  include: {
    I: './steps_file.js'
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    },
    allure: {},
    stepByStepReport: {
      enabled: true
    }
  },
  tests: 'tests/*_test.js',
  name: 'PPTR-Codeceptjs'
}