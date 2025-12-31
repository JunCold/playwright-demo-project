const { test } = require('../utils/fixtures');
const { createFakeUser } = require('../utils/userFactory');
const { expect } = require('@playwright/test');

test.describe('Login', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Register User', async ({ homePage, loginPage, signUpPage, page }) => {
    await expect(homePage.page).toHaveURL('/');
    await expect(homePage.slider).toBeVisible();

    const user = createFakeUser();
    user.account.password = user.password;
    await homePage.clickSignUpBtn();
    await loginPage.registerUser(user.name, user.email);
    await signUpPage.verifyTitle();
    await signUpPage.enterAccountInformation(user);
    await page.pause()
  });

});
