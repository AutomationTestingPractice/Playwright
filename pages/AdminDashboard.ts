import { Page, expect } from '@playwright/test';

export class AdminDashboard {

  readonly page: Page;

  constructor(page: Page) {

    this.page = page;
  }

  async verifyAdminDashboard() {

    await expect(
      this.page.getByText('User Management')
    ).toBeVisible();
  }
}