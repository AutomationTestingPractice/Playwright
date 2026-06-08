import { Page, expect } from '@playwright/test';

export class ManagerDashboard {

  readonly page: Page;

  constructor(page: Page) {

    this.page = page;
  }

  async verifyManagerDashboard() {

    const pageHeader = this.page.locator(
        'h6.oxd-topbar-header-breadcrumb-module'
      );
      
      await expect(pageHeader).toHaveText('Dashboard');
  }
}