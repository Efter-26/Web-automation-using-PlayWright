import { expect } from "@playwright/test";

class AddItemPage {
  constructor(page) {
    this.page = page;
    this.addCostButton = page.locator(".add-cost-button");
    this.itemNameInput = page.locator("#itemName");
    this.quantityButton = page.locator("button[type='button']");
    this.amountInput = page.locator("#amount");
    this.dateInput = page.locator("#purchaseDate");
    this.remarksInput = page.locator("#remarks");
    this.monthDropdown = page.locator("#month");
    this.submitButton = page.locator("[type=submit]");
    this.alert = page.locator("dialog[role='alert']");
  }

  async addItem(itemDetails) {
    // Click "Add Cost" button
    await this.addCostButton.click();

    // Fill item details
    await this.itemNameInput.fill(itemDetails.name);
    await this.amountInput.fill(itemDetails.amount);
    await this.dateInput.fill(itemDetails.date);

    // Set quantity by clicking button multiple times
    for (let i = 1; i < itemDetails.quantity; i++) {
      await this.quantityButton.nth(2).click();
    }

    // Select the month from the dropdown
    await this.monthDropdown.waitFor({ state: "visible" });
    await this.monthDropdown.selectOption({ label: itemDetails.month });

    // Fill remarks
    await this.remarksInput.fill(itemDetails.remarks);

    // Submit form
    await this.submitButton.click();

    // Wait for and accept the alert if it appears
    await this.page.waitForTimeout(2000); // Ensures Playwright can handle slower UI responses
    if (await this.alert.isVisible()) {
      await this.page.locator('button:has-text("OK")').click();
    }
  }
}

export default AddItemPage;
