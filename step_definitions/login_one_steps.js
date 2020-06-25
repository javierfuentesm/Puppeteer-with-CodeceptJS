const { I, loginPage } = inject();
const allure = codeceptjs.container.plugins("allure");

After(async () => {
  const date = Date.now();
  const screenshot = await I.saveScreenshot(`${date}.png`);
  allure.addAttachment("Success Screenshot", screenshot, "image/png");
});

Given(/^Im on the right page$/, async () => {
  I.amOnPage("index.html");
});

Given(/^I login$/, function () {});
Given(/^I login with my (.*)\$ and (.*)\$$/, function (user, password) {
  loginPage.login(user, password);
});
