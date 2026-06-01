import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { AdminDashboard } from '../pages/AdminDashboard';


import users from '../test-data/users.json';

for (const user of users) {

  test(`Verify ${user.role} Login`,
    async ({ page }) => {

    const loginPage = new LoginPage(page);
    const adminDashboard = new AdminDashboard(page);


    await page.goto('/web/index.php/auth/login');

    await loginPage.login(
      user.username,
      user.password
    );

    await expect(page).toHaveURL(/dashboard/);

    // Role validation
    await expect(
      page.getByText(user.expectedText)
    ).toBeVisible();

    await adminDashboard.verifyAdminDashboard();

  });
}