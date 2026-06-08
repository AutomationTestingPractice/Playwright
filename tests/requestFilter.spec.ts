import { test } from '@playwright/test';
import { RequestsPage } from '../pages/RequestsPage';
import { AdminDashboard } from '../pages/AdminDashboard';
import filterData from '../test-data/requestFilters.json';

test.describe('Request Filters', () => {

  for (const data of filterData) {

    test(`Verify ${data.searchText}`, async ({ page }) => {

      const requestsPage = new RequestsPage(page);

      await requestsPage.applyFilters({
        searchText: data.searchText,
        status: data.status,
        requestType: data.requestType
      });

      // Result verification
    });
  }
});