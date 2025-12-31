const ParentPage = require("./parent.page");

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

    async clickSignUpBtn(){
        await super.clickElement(this.signupLoginLink)
    }

 

}

module.exports = HomePage;
