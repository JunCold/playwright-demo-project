const ParentPage = require("./parent.page");
const { expect } = require("@playwright/test");
class AccountDeletedPage extends ParentPage {
  constructor(page) {
    super(page);
    this.page = page;
  }

  get accountDeletedTitle() {
    return this.page.locator('[data-qa="account-deleted"]');
  }

  get continueButton() {
    return this.page.locator('[data-qa="continue-button"]');
  }

  async clickContinue(){
    await super.clickElement(this.continueButton);
  }
}

module.exports = AccountDeletedPage;
