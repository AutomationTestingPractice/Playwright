import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Login Test', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await page.goto('/login');

  await loginPage.login(
    process.env.USERNAME!,
    process.env.PASSWORD!
  );
});