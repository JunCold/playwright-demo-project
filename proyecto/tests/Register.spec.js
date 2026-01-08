const { test } = require("../utils/fixtures");
const { createFakeUser } = require("../utils/userFactory");
const { expect } = require("@playwright/test");
const { USER_AUTOMATION } = process.env;

test.describe("Register", () => {
  test.beforeEach(async ({ page, homePage }) => {
    await page.goto("/");
    await expect(homePage.page).toHaveURL("/");
    await expect(homePage.slider).toBeVisible();
  });
  
  test("Register User", async ({
    homePage,
    loginPage,
    signUpPage,
    accountCreatedPage,
  }) => {
    const user = createFakeUser();
    user.account.password = user.password;
    await homePage.clickSignUpBtn();
    await loginPage.registerUser(user.name, user.email);
    await signUpPage.verifyTitle();
    await signUpPage.enterAccountInformation(user);
    await signUpPage.clickCreateAccount();
    await accountCreatedPage.waitForAccountCreated();
    await accountCreatedPage.clickContinueBtn();
    await homePage.clickDeleteAccount();
    await homePage.waitForAccountDeleted();
  });

  test("Register User With Existing Email", async ({
    homePage,
    loginPage,
  }) => {
    await homePage.clickSignUpBtn();
    await loginPage.registerUser("Repeated_User", USER_AUTOMATION);
    await expect(loginPage.emailAlreadyExistsMessage).toBeVisible();
  });
});
