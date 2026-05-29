import { Page, Locator,expect } from '@playwright/test';

export class LoginPage {

  readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
 readonly loginButton: Locator;
 readonly invalidCredError: Locator;
 readonly usernameError: Locator;
 readonly passwordError: Locator;
 readonly loginError: Locator;


  constructor(page: Page) {

    this.page = page;

    this.username = page.locator('input[name="username"]');

    this.password = page.locator('input[name="password"]');

    this.loginButton = page.locator('button[type="submit"]');

    this.invalidCredError = page.locator('p.oxd-text--p.oxd-alert-content-text');

    this.usernameError = page.locator('.oxd-input-group__message ');

    this.passwordError = page.locator('.oxd-input-field-error-message');

    this.loginError = page.locator('.alert-error');

  }

  async login(user: string, pass: string) {

    await this.username.fill(user);

    await this.password.fill(pass);

    await this.loginButton.click();
  }

  async verifyErrorMessage(expectedMessage: string) {

    await expect(this.invalidCredError)
      .toContainText(expectedMessage);
  }

  async verifyUsernameError(message: string) {

    await expect(this.usernameError)
      .toContainText(message);
  }

  async verifyPasswordError(message: string) {

    await expect(this.passwordError)
      .toContainText(message);
  }
}