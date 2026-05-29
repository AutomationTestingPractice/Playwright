
import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Negative Login Tests', () => {

  test('Empty Username',
    async ({ page }) => {

    const loginPage = new LoginPage(page);

    await page.goto('/web/index.php/auth/login');

    await loginPage.login(
      '',
      'Password123'
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
      'testuser',
      ''
    );

    await loginPage.verifyPasswordError(
      'Required'
    );
  });

  test('Invalid Credentials',
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
});