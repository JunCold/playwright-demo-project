async function loginAs(page, homePage, loginPage, user, password) {
  await page.goto('/');
  await homePage.clickSignUpBtn();
  await loginPage.logIn(user, password);
}

module.exports = { loginAs };
