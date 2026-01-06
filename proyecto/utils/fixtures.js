const { test: base } = require('@playwright/test');
const HomePage = require('../pageObjects/home.page');
const LoginPage = require('../pageObjects/loginPage');
const SignUpPage = require('../pageObjects/signUp.page');
const AccountCreatedPage = require('../pageObjects/accountCreatedPage');
const ContactUsPage = require('../pageObjects/contactUs.page');
const TestCasesPage = require('../pageObjects/testCases.page');
const ProductsPage = require('../pageObjects/productsPage');
const ProductDetailsPage = require('../pageObjects/productDetails.page');
const CartPage = require('../pageObjects/cart.page');
const CheckoutPage = require('../pageObjects/checkoutPage');
const PaymentPage = require('../pageObjects/paymentPage');
const PaymentDonePage = require('../pageObjects/payment_done.page');
const AccountDeletedPage = require('../pageObjects/accountDeleted.page');

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
productsPage: async ({page},use) => {
    await use(new ProductsPage(page));
},
productDetailsPage: async ({page},use) => {
    await use(new ProductDetailsPage(page));
},
cartPage: async ({page},use) => {
    await use(new CartPage(page));
},
checkoutPage: async ({page},use) => {
    await use(new CheckoutPage(page));
},
paymentPage: async ({page},use) => {
    await use(new PaymentPage(page));
},
paymentDonePage: async ({page},use) => {
    await use(new PaymentDonePage(page));
},
accountDeletedPage: async ({page},use) => {
    await use(new AccountDeletedPage(page));
},
})
module.exports = { test };
