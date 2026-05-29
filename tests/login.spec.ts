import { expect, test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { attachLogger } from '../utils/logger';

test('Login Test', async ({ page },testInfo) => {
  
    attachLogger(page, testInfo.title);
  const loginPage = new LoginPage(page);

  await page.goto('/web/index.php/auth/login');
  console.log(await page.title());
  expect(page).toHaveTitle("OrangeHRM");


  await loginPage.login(
    process.env.USERNAME!,
    process.env.PASSWORD!
  );
  await page.waitForTimeout(10000);

});