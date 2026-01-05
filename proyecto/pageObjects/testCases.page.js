const ParentPage = require("./parent.page");
const { expect } = require('@playwright/test');
class TestCasesPage extends ParentPage{
    constructor(page){
        super(page);
        this.page = page;
    }

 get testCasesTitle() {
  return this.page.getByRole('heading', {
    name: 'Test Cases',
    level: 2
  });
}






}

module.exports = TestCasesPage;
