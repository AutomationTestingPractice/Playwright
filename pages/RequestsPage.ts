import { Page, Locator } from '@playwright/test';

export class RequestsPage {

  readonly page: Page;
  readonly searchBox: Locator;
  readonly statusDropdown: Locator;
  readonly requestTypeDropdown: Locator;

  constructor(page: Page) {

    this.page = page;

    this.searchBox = page.locator(
      'input[placeholder*="Search"]'
    );

    this.statusDropdown = page.locator(
      'select'
    ).nth(0);

    this.requestTypeDropdown = page.locator(
      'select'
    ).nth(1);
  }

  async applyFilters(filters: {
    searchText?: string;
    status?: string;
    requestType?: string;
  }) {

    if (filters.searchText) {
      await this.searchBox.fill(filters.searchText);
    }

    if (filters.status) {
      await this.statusDropdown.selectOption({
        label: filters.status
      });
    }

    if (filters.requestType) {
      await this.requestTypeDropdown.selectOption({
        label: filters.requestType
      });
    }
  }
}