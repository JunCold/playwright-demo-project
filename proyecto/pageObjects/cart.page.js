const ParentPage = require("./parent.page");
const { expect } = require('@playwright/test');
class CartPage extends ParentPage{
    constructor(page){
        super(page);
        this.page = page;
    }

     get cartTable() {
        return this.page.locator('#cart_info_table');
    }

    get cartRows() {
        return this.cartTable.locator('tbody tr');
    }

    cartRowByIndex(index) {
        return this.cartRows.nth(index);
    }

    productNameByIndex(index) {
        return this.cartRowByIndex(index).locator('.cart_description h4 a');
    }

    productCategoryByIndex(index) {
        return this.cartRowByIndex(index).locator('.cart_description p');
    }

    productPriceByIndex(index) {
        return this.cartRowByIndex(index).locator('.cart_price p');
    }

    productQuantityByIndex(index) {
        return this.cartRowByIndex(index).locator('.cart_quantity button');
    }

    productTotalByIndex(index) {
        return this.cartRowByIndex(index).locator('.cart_total_price');
    }

    async getProductName(index) {
    return await this.productNameByIndex(index).innerText();
}

async getProductPrice(index) {
    const text = await this.productPriceByIndex(index).innerText();
    return this.parsePrice(text);
}

async getProductQuantity(index) {
    const text = await this.productQuantityByIndex(index).innerText();
    return Number(text);
}

async getProductTotal(index) {
    const text = await this.productTotalByIndex(index).innerText();
    return this.parsePrice(text);
}

parsePrice(text) {
    return Number(text.replace(/[^0-9]/g, ''));
}

}

module.exports = CartPage;
