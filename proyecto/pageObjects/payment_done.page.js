const ParentPage = require("./parent.page");
const { expect } = require("@playwright/test");
class PaymentDonePage extends ParentPage {
  constructor(page) {
    super(page);
    this.page = page;
  }

  get orderConfirmedMessage() {
    return this.page.locator("p", {
      hasText: "Congratulations! Your order has been confirmed!",
    });
  }

  get deleteAccountBtn() {
    return this.page.locator('a[href="/delete_account"]');
  }

  async clickDeleteAccount(){
    await super.clickElement(this.deleteAccountBtn)
  }
}

module.exports = PaymentDonePage;
