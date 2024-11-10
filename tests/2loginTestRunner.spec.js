import { test, expect } from "@playwright/test";
import { readFromJSONFile } from "../pages/utils/utils";
import LoginPage from "../pages/LoginPage";

test("User can login successfully", async ({ page }) => {
  await page.goto("/");
  const registeredUser = readFromJSONFile();
  if (registeredUser) {
    const login = new LoginPage(page);
    await login.loginUser(registeredUser.email, registeredUser.password);
  } else {
    console.log("No user found");
  }
});
