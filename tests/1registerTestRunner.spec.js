import { test, expect } from "@playwright/test";
import Registration from "../pages/Registration";
import { writeJSONFile, readFromJSONFile } from "../pages/utils/utils";
import { faker } from "@faker-js/faker";
import LoginPage from "../pages/LoginPage";
// import { writeJSONFile } from "../pages/utils/utils";

test.describe("Daily finance", () => {
  test.test("User can register successfully", async ({ page }) => {
    await page.goto("/");

    const reg = new Registration(page);

    function generatePhoneNumber() {
      return (
        "01" + Math.floor(100000000 + Math.random() * 900000000).toString()
      );
    }

    const phoneNumber = generatePhoneNumber();

    const userData = {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.userName() + "@gmail.com",
      password: faker.internet.password(),
      phoneNumber: phoneNumber,
      address: faker.location.city(),
    };

    await reg.registerUser(userData);

    //   writeJSONFile(userData);
    writeJSONFile(userData);
  });

});
