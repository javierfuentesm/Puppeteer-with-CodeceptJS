const allure = codeceptjs.container.plugins('allure');


Feature('login');

Scenario('Login', async(I) => {
    I.amOnPage('index.html');
    I.click('#signin_button');
    I.fillField('#user_login', 'username');
    I.fillField('#user_password', 'password');
    I.click('.btn-primary');
    const screenshot = await I.saveScreenshot('Screenshot.png');

    let url = await I.grabCurrentUrl();
    console.log(`Current URL is [${url}]`);

    allure.addAttachment("Screenshot", screenshot, "image/png");


});
