exports.config = {
  output: "evidence",
  helpers: {
    Puppeteer: {
      url: "http://zero.webappsecurity.com/",
      show: true,
      windowSize: "1200x900",
    },
  },
  include: {
    I: "./steps_file.js",
    loginPage: "./pages/loginPage.js",
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: "./features/*.feature",
    steps: [
      "./step_definitions/login_steps.js",
      "./step_definitions/login_one_steps.js",
    ],
  },
  plugins: {
    screenshotOnFail: {
      enabled: true,
    },
    retryFailedStep: {
      enabled: true,
    },
    allure: {},
    stepByStepReport: {
      enabled: true,
    },
  },
  tests: "tests/*_test.js",
  name: "PPTR-Codeceptjs",
};
