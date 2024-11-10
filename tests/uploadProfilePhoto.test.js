import { test, expect } from "@playwright/test";
import LoginPage from "../pages/LoginPage";
import UserProfilePage from "../pages/UserProfilePage";
import { readFromJSONFile } from "../pages/utils/utils";

test("Upload profile photo", async ({ page }) => {
  const userProfilePage = new UserProfilePage(page);

  // Navigate to user dashboard and then to profile settings
  await page.goto("/");
  const loginPage = new LoginPage(page);
  const registeredUser = readFromJSONFile();
  await loginPage.loginUser(registeredUser.email, registeredUser.password);
  await userProfilePage.goToProfileSettings();

  // Upload profile photo
  const photoPath = "./download.png";
  await userProfilePage.uploadProfilePhoto(photoPath);

});

test("Logout from the application", async ({ page }) => {
    const userProfilePage = new UserProfilePage(page);
  
    // Navigate to the dashboard or profile settings page (where logout is accessible)
    await page.goto("https://dailyfinance.roadtocareer.net/user");
  
    // Execute logout
    await userProfilePage.logout();

  });
