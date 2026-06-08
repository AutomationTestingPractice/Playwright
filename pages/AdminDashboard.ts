import { Page, expect, Locator } from '@playwright/test';
import { RequestsPage } from './RequestsPage';

export class AdminDashboard {

  readonly page: Page;
  readonly adminMenu: Locator;
  readonly requestsMenu: Locator;

  constructor(page: Page) {
    this.page = page;

    this.adminMenu = page.getByText('Admin');
    this.requestsMenu = page.getByText('Requests');
  }

  async verifyAdminDashboard(): Promise<void> {

    const pageHeader = this.page.locator(
      'h6.oxd-topbar-header-breadcrumb-module'
    );

    await expect(pageHeader).toHaveText('Dashboard');
  }

  async navigateToRequestsPage(): Promise<RequestsPage> {

    await this.adminMenu.click();

    return new RequestsPage(this.page);
  }
}