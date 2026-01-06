const { test } = require('../utils/fixtures');
const { expect } = require('@playwright/test');
test.describe('Test Cases', () => {

  test.beforeEach(async ({ page,homePage }) => {
    await page.goto('/');
    await expect(homePage.page).toHaveURL('/');
    await expect(homePage.slider).toBeVisible();
    
  });

  test('Test Cases', async ({ homePage,testCasesPage }) => {
    await homePage.clickTestCases()
    await expect(testCasesPage.testCasesTitle).toBeVisible()
    await expect(homePage.page).toHaveURL('/test_cases');
});


});
