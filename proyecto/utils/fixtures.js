const { test: base } = require('@playwright/test');
const HomePage = require('../pageObjects/home.page');
const LoginPage = require('../pageObjects/loginPage');
const SignUpPage = require('../pageObjects/signUp.page');

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
})
module.exports = { test };
