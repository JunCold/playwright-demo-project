const { test } = require("../utils/fixtures");
const { expect } = require("@playwright/test");
const { registerUserFlow } = require("../utils/register.helper");
const { loginAs } = require('../utils/auth.helper');
const {USER_AUTOMATION,PASSWORD_AUTOMATION} = process.env;
const { faker } = require("@faker-js/faker");
const fakeCard = {
  name: faker.person.fullName(),
  number: "4242424242424242",
  cvc: faker.number.int({ min: 100, max: 999 }).toString(),
  expMonth: "12",
  expYear: "2028",
};

test.describe("Test Cases", () => {
  test.beforeEach(async ({ page, homePage }) => {
    await page.goto("/");
    await expect(homePage.page).toHaveURL("/");
    await expect(homePage.slider).toBeVisible();
  });

  test("Place Order: Register before checkout", async ({
    homePage,
    productsPage,
    cartPage,
    productDetailsPage,
    loginPage,
    signUpPage,
    accountCreatedPage,
    checkoutPage,
    paymentPage,
    paymentDonePage,
    accountDeletedPage,
  }) => {
    await homePage.clickSignUpBtn();
    const user = await registerUserFlow({
      homePage,
      loginPage,
      signUpPage,
      accountCreatedPage,
    });
    let message = "Take my money";
    await homePage.clickProductsPage();
    await expect(productsPage.page).toHaveURL("/products");
    await productsPage.viewFirstProduct();
    await productDetailsPage.setQuantity("4");
    await productDetailsPage.addToCartFromDetail();
    await productDetailsPage.waitForAddToCartModal();
    await productDetailsPage.clickContinueShopping();
    await productDetailsPage.goToCartFromDetail();
    await cartPage.clickCheckOut();
    await checkoutPage.validateDeliveryAddress(user);
    await checkoutPage.fillOrderComment(message);
    await checkoutPage.clickPlaceOrder();
    await paymentPage.fillPaymentForm(fakeCard);
    await expect(paymentDonePage.orderConfirmedMessage).toBeVisible();
    await paymentDonePage.clickDeleteAccount();
    await expect(accountDeletedPage.accountDeletedTitle).toBeVisible();
    await accountDeletedPage.clickContinue();
  });
  test("Place Order: Register while checkout", async ({
    homePage,
    productsPage,
    cartPage,
    productDetailsPage,
    loginPage,
    signUpPage,
    accountCreatedPage,
    checkoutPage,
    paymentPage,
    paymentDonePage,
    accountDeletedPage,
  }) => {
    let message = "Take my money";
    await homePage.clickProductsPage();
    await expect(productsPage.page).toHaveURL("/products");
    await productsPage.viewFirstProduct();
    await productDetailsPage.setQuantity("4");
    await productDetailsPage.addToCartFromDetail();
    await productDetailsPage.waitForAddToCartModal();
    await productDetailsPage.clickContinueShopping();
    await productDetailsPage.goToCartFromDetail();
    await cartPage.clickCheckOut();
    await cartPage.clickRegisterLogin();
    const user = await registerUserFlow({
      loginPage,
      signUpPage,
      accountCreatedPage,
    });
    await homePage.goToCart();
    await cartPage.clickCheckOut();
    await checkoutPage.validateDeliveryAddress(user);
    await checkoutPage.fillOrderComment(message);
    await checkoutPage.clickPlaceOrder();
    await paymentPage.fillPaymentForm(fakeCard);
    await expect(paymentDonePage.orderConfirmedMessage).toBeVisible();
    await paymentDonePage.clickDeleteAccount();
    await expect(accountDeletedPage.accountDeletedTitle).toBeVisible();
    await accountDeletedPage.clickContinue();
  });
  test("Place Order: LogIn Before checkout", async ({
    homePage,
    productsPage,
    cartPage,
    productDetailsPage,
    loginPage,
    checkoutPage,
    paymentPage,
    paymentDonePage,
    page,
  }) => {
    let message = "Take my money";
    await loginAs(page, homePage, loginPage, USER_AUTOMATION, PASSWORD_AUTOMATION);
    await homePage.clickProductsPage();
    await expect(productsPage.page).toHaveURL("/products");
    await productsPage.viewFirstProduct();
    await productDetailsPage.setQuantity("4");
    await productDetailsPage.addToCartFromDetail();
    await productDetailsPage.waitForAddToCartModal();
    await productDetailsPage.clickContinueShopping();
    await productDetailsPage.goToCartFromDetail();
    await cartPage.clickCheckOut();
    await checkoutPage.fillOrderComment(message);
    await checkoutPage.clickPlaceOrder();
    await paymentPage.fillPaymentForm(fakeCard);
    await expect(paymentDonePage.orderConfirmedMessage).toBeVisible();
  });
});
