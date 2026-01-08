const { test: base } = require("@playwright/test");
const HomePage = require("../pageObjects/home.page");
const LoginPage = require("../pageObjects/loginPage");
const SignUpPage = require("../pageObjects/signUp.page");
const AccountCreatedPage = require("../pageObjects/accountCreatedPage");
const ContactUsPage = require("../pageObjects/contactUs.page");
const TestCasesPage = require("../pageObjects/testCases.page");
const ProductsPage = require("../pageObjects/productsPage");
const ProductDetailsPage = require("../pageObjects/productDetails.page");
const CartPage = require("../pageObjects/cart.page");
const CheckoutPage = require("../pageObjects/checkoutPage");
const PaymentPage = require("../pageObjects/paymentPage");
const PaymentDonePage = require("../pageObjects/payment_done.page");
const AccountDeletedPage = require("../pageObjects/accountDeleted.page");


const test = base.extend({
  page: async ({ page }, use) => {

    await page.route('**/*', route => {
      const url = route.request().url();
      if (
        url.includes('googleads') ||
        url.includes('doubleclick') ||
        url.includes('adsystem') ||
        url.includes('googlesyndication') ||
        url.includes('adservice')
      ) {
        console.log('⚠ ad removed from '+url)
        return route.abort();
        
      }
      route.continue();
    });

    await use(page);
  },
  homePage: async ({ page }, use) => use(new HomePage(page)),
  loginPage: async ({ page }, use) => use(new LoginPage(page)),
  signUpPage: async ({ page }, use) => use(new SignUpPage(page)),
  accountCreatedPage: async ({ page }, use) => use(new AccountCreatedPage(page)),
  contactUsPage: async ({ page }, use) => use(new ContactUsPage(page)),
  testCasesPage: async ({ page }, use) => use(new TestCasesPage(page)),
  productsPage: async ({ page }, use) => use(new ProductsPage(page)),
  productDetailsPage: async ({ page }, use) => use(new ProductDetailsPage(page)),
  cartPage: async ({ page }, use) => use(new CartPage(page)),
  checkoutPage: async ({ page }, use) => use(new CheckoutPage(page)),
  paymentPage: async ({ page }, use) => use(new PaymentPage(page)),
  paymentDonePage: async ({ page }, use) => use(new PaymentDonePage(page)),
  accountDeletedPage: async ({ page }, use) => use(new AccountDeletedPage(page)),
});

module.exports = { test };
