const ParentPage = require("./parent.page");
const { expect } = require('@playwright/test');
class HomePage extends ParentPage{
    constructor(page){
        super(page);
        this.page = page;
    }

    get slider(){
        return this.page.locator('#slider');
    }

    get signupLoginLink(){
          return this.page.getByRole('link', { name: 'Signup / Login' });
    }

    get deleteAccountLink() {
       return this.page.locator('a[href="/delete_account"]');
    }

    get accountDeletedHeader(){
        return this.page.locator('[data-qa="account-deleted"]')
    }

    get loggedInUser() {
        return this.page.locator('li a', { hasText: 'Logged in as' });
    }
   
    get logoutBtn() {
        return this.page.locator('a[href="/logout"]');
    }

    async clickDeleteAccount() {
       await this.clickElement(this.deleteAccountLink);
    }

    async waitForAccountDeleted(){
        await super.waitForElementVisible(this.accountDeletedHeader);
        await expect(this.accountDeletedHeader).toHaveText("Account Deleted!");
    }
    async clickSignUpBtn(){
        await super.clickElement(this.signupLoginLink)
    }

    async verifyUserIsLogged(username) {
        await expect(this.loggedInUser).toBeVisible();
        await expect(this.loggedInUser).toContainText(username);
    }
    async logOut(){
        await super.clickElement(this.logoutBtn)
    }


 

}

module.exports = HomePage;
