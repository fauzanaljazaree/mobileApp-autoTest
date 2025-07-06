export const config = {
  runner: "local",
  specs: ["./test/*.js"],
  maxInstances: 1,
  capabilities: [
    {
      platformName: "Android",
      "appium:deviceName": "83b717280512",
      "appium:platformVersion": "11",
      "appium:automationName": "UiAutomator2",
      "appium:appPackage": "io.appium.android.apis",
      "appium:appActivity": ".ApiDemos",
      "appium:noReset": false,
    },
  ],
  logLevel: "info",
  framework: "mocha",
  reporters: [
    "spec",
    [
      "allure",
      {
        outputDir: "allure-results",
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
      },
    ],
  ],
  // hostname: "localhost",
  hostname: "127.0.0.1",
  port: 4723,
  path: "/",
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
  afterTest: async function (_, __, { passed }) {
    if (!passed) {
      await browser.takeScreenshot();
    }
  },
};
