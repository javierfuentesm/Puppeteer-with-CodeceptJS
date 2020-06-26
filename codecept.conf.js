exports.config = {
  output: "evidence",
  helpers: {
    Puppeteer: {
      url: "http://zero.webappsecurity.com/",
      // browser: "firefox",
      show: true,
      windowSize: "1200x900",
      chrome: {
        headless: true,
        args: ["--ignore-certificate-errors"],
      },
      firefox: {
        headless: true,
        ignoreHTTPSErrors: true,
        args: [
          "--no-sandbox",
          "--disable-dev-shm-usage",
          "--enable-features=NetworkService",
        ],
      },
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
  multiple: {
    basic: {
      // run all tests in chrome and firefox
      browsers: ["chrome", "firefox"],
    },
    parallel: {
      chunks: 30,
      browsers: [
        {
          browser: "chrome",
        },
        {
          browser: "firefox",
        },
      ],
    },
  },
};
