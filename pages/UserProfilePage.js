import { expect } from "@playwright/test";

class UserProfilePage {
  constructor(page) {
    this.page = page;
    this.editButton = page.locator("button").nth(1); // Edit button, adjust index if necessary
    this.emailInput = page.locator("input[name='email']");
    this.saveChangesButton = page.locator("button").nth(2); // Save button, adjust index if needed
    this.profileSettingsButton = page.locator("a[href='/user/profile']"); // Profile settings link
    this.uploadPhotoInput = page.locator("input[type='file']"); // File upload input
    this.logoutButton = page.locator("a[href='/logout']"); // Logout link
  }

  async goToProfileSettings() {
    await this.profileSettingsButton.click();
    await this.page.waitForLoadState("networkidle");
  }

  async uploadProfilePhoto(photoPath) {
    await this.uploadPhotoInput.setInputFiles(photoPath); // Upload photo file
    await this.saveChangesButton.click(); // Save changes
  }

  async logout() {
    await this.logoutButton.click();
    await this.page.waitForLoadState("networkidle");
  }
}

export default UserProfilePage;
