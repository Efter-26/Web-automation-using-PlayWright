import { test, expect } from "@playwright/test";
import AddItemPage from "../pages/AddItemPage";
import LoginPage from "../pages/LoginPage";
import UserDashboardPage from "../pages/UserDashboardPage";
import { writeJSONFile, readFromJSONFile } from "../pages/utils/utils";
test.describe("Add Items and Verify", () => {

  test("Login and add items to verify in dashboard", async ({ page }) => {
    // Login with the registered user
    await page.goto("/");
    const loginPage = new LoginPage(page);
    const registeredUser = readFromJSONFile();
    await loginPage.loginUser(registeredUser.email, registeredUser.password);

    // Add items using AddItemPage
    const addItemPage = new AddItemPage(page);
    const items = [
      { name: "Fish", quantity: 1, amount: "1000", date: "2024-11-10", month: "November", remarks: "good" },
      { name: "Chicken", quantity: 1, amount: "500", date: "2024-11-10", month: "November", remarks: "better" },
    ];
    for (const item of items) {
      await addItemPage.addItem(item);
    }

    // Verify items on User Dashboard
    const userDashboard = new UserDashboardPage(page);
    await page.goto("/user"); // Navigate to user dashboard
    await userDashboard.verifyItemsAdded(2); // Verify two items were added
  });
});
