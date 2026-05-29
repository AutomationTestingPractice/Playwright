import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Negative Login Tests', () => {

  test('Invalid Username and Password',
    async ({ page }) => {

    const loginPage = new LoginPage(page);

    await page.goto('/web/index.php/auth/login');

    await loginPage.login(
      'wronguser',
      'wrongpassword'
    );

    await loginPage.verifyErrorMessage(
      'Invalid credentials'
    );
  });

  test('Empty Username',
    async ({ page }) => {

    const loginPage = new LoginPage(page);

    await page.goto('/web/index.php/auth/login');

    await loginPage.login(
      '',
      'admin123'
    );

    await loginPage.verifyUsernameError(
      'Required'
    );
  });

  test('Empty Password',
    async ({ page }) => {

    const loginPage = new LoginPage(page);

    await page.goto('/web/index.php/auth/login');

    await loginPage.login(
      'Admin',
      ''
    );

    await loginPage.verifyPasswordError(
      'Required'
    );
  });
});