const ParentPage = require("./parent.page");
const { expect } = require('@playwright/test');
class ProductsPage extends ParentPage{
    constructor(page){
        super(page);
        this.page = page;
    }

    get allProductsTitle() {
        return this.page.getByRole('heading', { name: 'All Products', exact: true });
    }

    get productsSection() {
        return this.page.locator('.features_items');
    }

    get products() {
        return this.productsSection.locator('.col-sm-4');
    }

    get firstProduct() {
        return this.products.first();
    }

    get firstProductViewLink() {
        return this.firstProduct.getByRole('link', { name: 'View Product' });
    }
  
    get cartLink() {
        return this.page.locator('.shop-menu a[href="/view_cart"]');
    }


    get searchProductInput() {
        return this.page.locator('#search_product');
    }

    get searchProductBtn() {
        return this.page.locator('#submit_search');
    }

    get searchedProductsTitle() {
        return this.productsSection.getByRole('heading', {
        name: 'Searched Products',
        exact: true
     });
    }

    get productNames() {
        return this.products.locator('.productinfo p');
    }

    get addToCartButtons() {
        return this.page.locator('a.add-to-cart');
    }

    get addToCartModalTitle() {
        return this.page.locator('h4.modal-title', { hasText: 'Added!' });
    }

    get continueShoppingButton() {
        return this.page.locator('button.close-modal');
    }

  
    async addProductToCartByIndex(index) {
        const product = this.products.nth(index);
        await product.scrollIntoViewIfNeeded();
        await product.hover();
        const addToCartButton = product.locator('a.add-to-cart').first();
        await super.clickElement(addToCartButton);
    }

    async viewFirstProduct(){
        await super.clickElement(this.firstProductViewLink);
    }

    async searchProduct(product){
        await super.fillInput(this.searchProductInput,product);
        await super.clickElement(this.searchProductBtn)
    }

    async clickContinueShooping(){
        await super.clickElement(this.continueShoppingButton)
    }

    async goToCart(){
        await this.cartLink.scrollIntoViewIfNeeded();
        await super.clickElement(this.cartLink);
    }

}

module.exports = ProductsPage;
