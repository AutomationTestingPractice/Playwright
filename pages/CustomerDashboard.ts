import { Page, expect } from '@playwright/test';

export class CustomerDashboard {

  readonly page: Page;

  constructor(page: Page) {

    this.page = page;
  }

  async verifyCustomerDashboard() {

    const pageHeader = this.page.locator(
        'h6.oxd-topbar-header-breadcrumb-module'
      );
      
      await expect(pageHeader).toHaveText('Dashboard');
  }
}