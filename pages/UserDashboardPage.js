import { expect } from "@playwright/test";

class UserDashboardPage {
  constructor(page) {
    this.page = page;
    this.summaryText = page.locator(".summary span"); // Locator for summary text showing item count
    this.itemTable = page.locator("tbody"); // Locator for item list table
  }

  async verifyItemsAdded(expectedCount) {
    // Wait for the table to be visible on the dashboard
    await expect(this.itemTable).toBeVisible();

    // Get the item count from the summary text
    const actualCountText = await this.summaryText.first().innerText();
    const actualCount = actualCountText.replace(/[^\d]/g, "");

    // Assert the item count matches the expected count
    expect(actualCount).toBe(expectedCount.toString());
  }
}

export default UserDashboardPage;
