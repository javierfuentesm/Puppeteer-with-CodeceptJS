const { I } = inject();

Given(/^Im on the right page$/, async () => {
  I.amOnPage("index.html");
});
When(/^I type my email$/, function () {
  I.fillField("#user_login", "username");
});
When(/^I click on login$/, function () {
  I.click("#signin_button");
});
When(/^I type my password$/, function () {
  I.fillField("#user_password", "password");
});
When(/^I submit the form$/, function () {
  I.click(".btn-primary");
});
Then(/^I should see the home page$/, function () {
  I.see("Cash Accounts");
});
