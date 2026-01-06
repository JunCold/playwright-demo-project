const ParentPage = require("./parent.page");
const { expect } = require("@playwright/test");
class CheckoutPage extends ParentPage {
  constructor(page) {
    super(page);
    this.page = page;
  }

  get deliveryAddress() {
    return this.page.locator("#address_delivery");
  }

  get fullName() {
    return this.page.locator(
      "#address_delivery .address_firstname.address_lastname"
    );
  }

  get company() {
    return this.page
      .locator("#address_delivery li.address_address1.address_address2")
      .first();
  }

  get addressLine1() {
    return this.page
      .locator("#address_delivery li.address_address1.address_address2")
      .nth(1);
  }

  get addressLine2() {
    return this.page
      .locator("#address_delivery li.address_address1.address_address2")
      .nth(2);
  }

  get cityStateZip() {
    return this.page.locator("#address_delivery .address_city");
  }

  get country() {
    return this.page.locator("#address_delivery .address_country_name");
  }

  get phone() {
    return this.page.locator("#address_delivery .address_phone");
  }

  get orderCommentTextarea() {
    return this.page.locator('textarea[name="message"]');
  }

  get placeOrderButton() {
    return this.page.locator("a.check_out", { hasText: "Place Order" });
  }

  async validateDeliveryAddress(user) {
    await expect(this.fullName).toContainText(user.personal.firstName);
    await expect(this.fullName).toContainText(user.personal.lastName);
    await expect(this.company).toHaveText(user.personal.company);
    await expect(this.addressLine1).toHaveText(user.address.address1);
    await expect(this.addressLine2).toHaveText(user.address.address2);
    await expect(this.cityStateZip).toContainText(user.address.city);
    await expect(this.country).toHaveText(user.address.country);
    await expect(this.phone).toHaveText(user.contact.mobile);
  }

  async fillOrderComment(message) {
    await super.fillInput(this.orderCommentTextarea, message);
  }

  async clickPlaceOrder(){
    await super.clickElement(this.placeOrderButton);
  }
}

module.exports = CheckoutPage;
