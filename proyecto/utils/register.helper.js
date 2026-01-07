const { createFakeUser } = require('./userFactory');

async function registerUserFlow({
  homePage,
  loginPage,
  signUpPage,
  accountCreatedPage
}) {
  const user = createFakeUser();
  user.account.password = user.password;
  await loginPage.registerUser(user.name, user.email);
  await signUpPage.verifyTitle();
  await signUpPage.enterAccountInformation(user);
  await signUpPage.clickCreateAccount();
  await accountCreatedPage.waitForAccountCreated();
  await accountCreatedPage.clickContinueBtn();
  return user; 
}

module.exports = { registerUserFlow };
