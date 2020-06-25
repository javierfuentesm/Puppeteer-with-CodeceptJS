const { I } = inject();

module.exports = {
  elements: {
    signinButton: "#signin_button",
    userName: "#user_login",
    password: "#user_password",
    loginButton: ".btn-primary",
  },
  login(username, password) {
    I.click(this.elements.signinButton);
    I.fillField(this.elements.userName, username);
    I.fillField(this.elements.password, password);
    I.click(this.elements.loginButton);
  },
  // insert your locators and methods here
};
