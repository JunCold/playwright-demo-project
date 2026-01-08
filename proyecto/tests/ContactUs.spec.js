const { test } = require("../utils/fixtures");
const { createFakeUser } = require("../utils/userFactory");
const { expect } = require("@playwright/test");
test.describe("Register", () => {
  test.beforeEach(async ({ page, homePage }) => {
    await page.goto("/");
    await expect(homePage.page).toHaveURL("/");
    await expect(homePage.slider).toBeVisible();
  });

  const contactUsData = {
    name: "Juan Perez",
    email: "julian@test.com",
    subject: "Soporte",
    message: "Necesito ayuda por favor",
    filePath: "test-data/sample.txt",
  };

  test("Contact Us Form", async ({ homePage, contactUsPage, page }) => {
    await homePage.clickContactUs();
    await expect(contactUsPage.getInTouchHeader).toBeVisible();
    await contactUsPage.fillContactUsForm(contactUsData);
    await contactUsPage.clicksubmitBtn();
  });
});
