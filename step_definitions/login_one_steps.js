const { I, loginPage } = inject();
const allure = codeceptjs.container.plugins("allure");

After(async () => {
  const screenshot = await I.saveScreenshot("Screenshot.png");
  allure.addAttachment("Screenshot", screenshot, "image/png");
});

Given(/^Im on the right page$/, async () => {
  I.amOnPage("index.html");
});

Given(/^I login$/, function () {
  loginPage.login("username", "password");
});
