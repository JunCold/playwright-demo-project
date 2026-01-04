const ParentPage = require("./parent.page");

class LoginPage extends ParentPage{
    constructor(page){
        super(page);
        this.page = page;
    }

 get signUpNameInput(){
    return this.page.locator('[data-qa="signup-name"]')
 }
 get signUpEmailInput(){
    return this.page.locator('[data-qa="signup-email"]')
 }

 get logInEmail(){
   return this.page.locator('[data-qa="login-email"]')
 }
 
 get logInPassword(){
   return this.page.locator('[data-qa="login-password"]')
 }
 
 get signUpBtn(){
    return this.page.locator('[data-qa="signup-button"]')
 }
 get logInHeader() {
  return this.page.getByRole('heading', { name: 'Login to your account' });
   }
  get logInBtn(){
    return this.page.locator('[data-qa="login-button"]')
  }

  get errorMessage() {
      return this.page.getByText('Your email or password is incorrect!');
   }


 async registerUser(userName,email){
    await super.fillInput(this.signUpNameInput,userName)
    await super.fillInput(this.signUpEmailInput,email)
    await super.clickElement(this.signUpBtn)
 }


async expectLoginError() {
  await expect(this.errorMessage).toBeVisible();
}


 async logIn(user,password){
   await super.fillInput(this.logInEmail,user)
   await super.fillInput(this.logInPassword,password)
   await super.clickElement(this.logInBtn)
 }

}

module.exports = LoginPage;
