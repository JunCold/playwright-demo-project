const { test } = require("../utils/fixtures");
const { expect } = require("@playwright/test");

test.describe("Test Cases", () => {
  test.beforeEach(async ({ page, homePage }) => {
    await page.goto("/");
    await expect(homePage.page).toHaveURL("/");
    await expect(homePage.slider).toBeVisible();
  });
 
  test("Verify All Products and Product Detail Page", async ({
    homePage,
    productsPage,
    productDetailsPage,
  }) => {
    await homePage.clickProductsPage();
    await expect(productsPage.page).toHaveURL("/products");
    await expect(productsPage.productsSection).toBeVisible();
    await expect(productsPage.products.first()).toBeVisible();
    await productsPage.viewFirstProduct();
    await expect(productDetailsPage.page).toHaveURL("/product_details/1");
    await expect(productDetailsPage.productName).toBeVisible();
    await expect(productDetailsPage.productCategory).toBeVisible();
    await expect(productDetailsPage.productPrice).toBeVisible();
    await expect(productDetailsPage.productAvailability).toBeVisible();
    await expect(productDetailsPage.productCondition).toBeVisible();
    await expect(productDetailsPage.productBrand).toBeVisible();
  });

  test("Search Product", async ({ homePage, productsPage }) => {
    await homePage.clickProductsPage();
    await productsPage.searchProduct("shirt");
    await expect(productsPage.searchedProductsTitle).toBeVisible();
    const count = await productsPage.products.count();
    expect(count).toBeGreaterThan(0);
  });

  test("Add to Cart", async ({ homePage, productsPage, cartPage }) => {
    await homePage.clickProductsPage();
    await productsPage.addProductToCartByIndex(0);
    await productsPage.clickContinueShooping();
    await productsPage.addProductToCartByIndex(1);
    await productsPage.clickContinueShooping();
    await productsPage.goToCart();
    const itemsCount = await cartPage.cartRows.count();
    await expect(itemsCount).toBe(2);

    for (let i = 0; i < itemsCount; i++) {
      const name = await cartPage.getProductName(i);
      const price = await cartPage.getProductPrice(i);
      const quantity = await cartPage.getProductQuantity(i);
      const total = await cartPage.getProductTotal(i);
      expect(name.length).toBeGreaterThan(0);
      expect(total).toBe(price * quantity);
    }
  });

  test("Verify Product Quantity in Cart", async ({
    homePage,
    productsPage,
    cartPage,
    productDetailsPage,
  }) => {
    await homePage.clickProductsPage();
    await expect(productsPage.page).toHaveURL("/products");
    await expect(productsPage.productsSection).toBeVisible();
    await expect(productsPage.products.first()).toBeVisible();
    await productsPage.viewFirstProduct();
    await productDetailsPage.setQuantity("4");
    await productDetailsPage.addToCartFromDetail();
    await productDetailsPage.waitForAddToCartModal();
    await productDetailsPage.clickContinueShopping();
    await productDetailsPage.goToCartFromDetail();
    await expect(cartPage.productQuantityByIndex(0)).toHaveText("4");
  });
});
