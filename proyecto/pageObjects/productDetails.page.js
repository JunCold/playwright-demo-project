const ParentPage = require("./parent.page");
const { expect } = require('@playwright/test');
class ProductDetailsPage extends ParentPage{
    constructor(page){
        super(page);
        this.page = page;
    }

    get productInfo() {
        return this.page.locator('.product-information');
    }

    get productName() {
        return this.productInfo.locator('h2');
    }

    get productCategory() {
        return this.productInfo.locator('p', { hasText: 'Category:' });
    }

    get productPrice() {
        return this.productInfo.locator('span span');
    }

    get productAvailability() {
        return this.productInfo.locator('p', { hasText: 'Availability:' });
    }

    get productCondition() {
        return this.productInfo.locator('p', { hasText: 'Condition:' });
    }

    get productBrand() {
        return this.productInfo.locator('p', { hasText: 'Brand:' });
    }

    get quantityInput() {
        return this.page.locator('#quantity');
    }

    get addToCartButton() {
        return this.page
        .locator('.product-information')
        .locator('button.cart', { hasText: 'Add to cart' });
    }

    get addToCartModal() {
        return this.page.locator('.modal-content');
    }

    get addToCartModalTitle() {
        return this.page.locator('.modal-content h4.modal-title', {
        hasText: 'Added!'
    });
    }   
    get addToCartSuccessMessage() {
        return this.page.locator('.modal-body p', {
        hasText: 'Your product has been added to cart.'
    });
    }

    get continueShoppingButton() {
        return this.page.locator('button.close-modal', {
        hasText: 'Continue Shopping'
    });
    }



    get cartLink() {
        return this.page.getByRole('link', { name: 'Cart' });
    }


    async setQuantity(value) {
        await this.quantityInput.scrollIntoViewIfNeeded();
        await this.quantityInput.fill('');          
        await this.quantityInput.type(String(value)); 
        await expect(this.quantityInput).toHaveValue(String(value));
    }

    async addToCartFromDetail(){
        await super.clickElement(this.addToCartButton);
    }

    async waitForAddToCartModal() {
        await expect(this.addToCartModal).toBeVisible();
        await expect(this.addToCartModalTitle).toBeVisible();
        await expect(this.addToCartSuccessMessage).toBeVisible();
    }

    async clickContinueShopping(){
        await super.clickElement(this.continueShoppingButton);
    }

    async goToCartFromDetail(){
        await super.clickElement(this.cartLink)
    }


}

module.exports = ProductDetailsPage;
