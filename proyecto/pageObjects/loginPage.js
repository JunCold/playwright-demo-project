const ParentPage = require("./parent.page");

class LoginPage extends ParentPage{
    constructor(page){
        super(page);
        this.page = page;
    }

 get nameInput(){
    return this.page.locator('[data-qa="signup-name"]')
 }
 get emailInput(){
    return this.page.locator('[data-qa="signup-email"]')
 }
 get signUpBtn(){
    return this.page.locator('[data-qa="signup-button"]')
 }
 async registerUser(userName,email){
    await super.fillInput(this.nameInput,userName)
    await super.fillInput(this.emailInput,email)
    await super.clickElement(this.signUpBtn)
 }

}

module.exports = LoginPage;
