const ParentPage = require("./parent.page");
const { expect } = require("@playwright/test");
class PaymentPage extends ParentPage {
  constructor(page) {
    super(page);
    this.page = page;
  }

  get nameOnCard() {
    return this.page.locator('[data-qa="name-on-card"]');
  }

  get cardNumber() {
    return this.page.locator('[data-qa="card-number"]');
  }

  get cvc() {
    return this.page.locator('[data-qa="cvc"]');
  }

  get expiryMonth() {
    return this.page.locator('[data-qa="expiry-month"]');
  }

  get expiryYear() {
    return this.page.locator('[data-qa="expiry-year"]');
  }

  get payAndConfirmButton() {
    return this.page.locator('[data-qa="pay-button"]');
  }

  async fillPaymentForm(card) {
    await this.nameOnCard.fill(card.name);
    await this.cardNumber.fill(card.number);
    await this.cvc.fill(card.cvc);
    await this.expiryMonth.fill(card.expMonth);
    await this.expiryYear.fill(card.expYear);
    await super.clickElement(this.payAndConfirmButton);

  }
}

module.exports = PaymentPage;
