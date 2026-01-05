const { test } = require('../utils/fixtures');
const { loginAs } = require('../utils/auth.helper');
const { expect } = require('@playwright/test');
const {USER_AUTOMATION,PASSWORD_AUTOMATION} = process.env;
test.describe('Login', () => {

  test.beforeEach(async ({ page,homePage }) => {
    await page.goto('/');
    await expect(homePage.page).toHaveURL('/');
    await expect(homePage.slider).toBeVisible();
  });

  test('Possitive Login', async ({ homePage, loginPage,page }) => {
        await homePage.clickSignUpBtn();
        await expect(loginPage.logInHeader).toBeVisible();
        await loginPage.logIn(USER_AUTOMATION,PASSWORD_AUTOMATION)
        await expect(homePage.loggedInUser).toBeVisible();
  });
  test('Negative Login', async ({ homePage, loginPage,page }) => {
        await homePage.clickSignUpBtn();
        await expect(loginPage.logInHeader).toBeVisible();
        await loginPage.logIn('fake_user@gmail.com','fake_password');
        await expect(loginPage.errorMessage).toBeVisible();
        await expect(homePage.loggedInUser).not.toBeVisible();
        await expect(loginPage.logInHeader).toBeVisible();    
  });
  test('Logout', async ({ homePage, loginPage,page }) => {
    await loginAs(page, homePage, loginPage, USER_AUTOMATION, PASSWORD_AUTOMATION);
    await homePage.logOut();
    await expect(homePage.loggedInUser).not.toBeVisible();
    await expect(homePage.logoutBtn).not.toBeVisible();
    await expect(loginPage.logInHeader).toBeVisible();
    await page.pause();
  });

});
