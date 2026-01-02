const { test: base } = require('@playwright/test');
const HomePage = require('../pageObjects/home.page');
const LoginPage = require('../pageObjects/loginPage');
const SignUpPage = require('../pageObjects/signUp.page');
const AccountCreatedPage = require('../pageObjects/accountCreatedPage');

const test = base.extend({
homePage: async ({page},use) => {
    await use(new HomePage(page));
},
loginPage: async ({page},use) => {
    await use(new LoginPage(page));
},
signUpPage: async ({page},use) => {
    await use(new SignUpPage(page));
},
accountCreatedPage: async ({page},use) => {
    await use(new AccountCreatedPage(page));
},
})
module.exports = { test };
