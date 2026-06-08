import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { AdminDashboard } from '../pages/AdminDashboard';
import { RequestsPage } from '../pages/RequestsPage';

import users from '../test-data/users.json';
import filterData from '../test-data/requestFilters.json';

for (const user of users) {

  for (const data of filterData) {

    test(
      `${user.role} | Search=${data.searchText} | Status=${data.status}`,
      async ({ page }) => {

        const loginPage = new LoginPage(page);
        const adminDashboard = new AdminDashboard(page);

        await page.goto('/web/index.php/auth/login');

        await loginPage.login(
          user.username,
          user.password
        );

        await expect(page).toHaveURL(/dashboard/);

        await adminDashboard.verifyAdminDashboard();

        const requestsPage =
          await adminDashboard.navigateToRequestsPage();

        await requestsPage.applyFilters({
          searchText: data.searchText,
          status: data.status,
          requestType: data.requestType
        });

        // Verification
        // await requestsPage.verifyResults(data.searchText);

      }
    );
  }
}