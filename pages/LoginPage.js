export default class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailInput = page.getByRole("textbox", { name: "Email" });
    this.passwordInput = page.getByRole("textbox", { name: "Password" });
    this.loginBtn = page.getByRole("button", { name: "LOGIN" });
  }

  async loginUser(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginBtn.click();
  }
}
