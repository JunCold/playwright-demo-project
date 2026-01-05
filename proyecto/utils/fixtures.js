const { test: base } = require('@playwright/test');
const HomePage = require('../pageObjects/home.page');
const LoginPage = require('../pageObjects/loginPage');
const SignUpPage = require('../pageObjects/signUp.page');
const AccountCreatedPage = require('../pageObjects/accountCreatedPage');
const ContactUsPage = require('../pageObjects/contactUs.page');
const TestCasesPage = require('../pageObjects/testCases.page');

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
contactUsPage: async ({page},use) => {
    await use(new ContactUsPage(page));
},
testCasesPage: async ({page},use) => {
    await use(new TestCasesPage(page));
},
})
module.exports = { test };
