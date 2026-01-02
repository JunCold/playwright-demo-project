const ParentPage = require("./parent.page");
const { expect } = require('@playwright/test');

class AccountCreatedPage extends ParentPage{
    constructor(page){
        super(page);
        this.page = page;
    }

    get accountCreatedHeader(){
        return this.page.locator('[data-qa="account-created"]')
    }

    get continueBtn(){
         return this.page.locator('[data-qa="continue-button"]')    
    }

    async waitForAccountCreated(){
        await super.waitForElementVisible(this.accountCreatedHeader)
        await expect(this.accountCreatedHeader).toHaveText('Account Created!');
    }
    
    async clickContinueBtn(){
        await super.clickElement(this.continueBtn)
    }


 

}

module.exports = AccountCreatedPage;
