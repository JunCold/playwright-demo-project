const ParentPage = require("./parent.page");

class SignUpPage extends ParentPage {
  constructor(page) {
    super(page);
  }

  get maleRadioBtn() {
    return this.page.locator('#id_gender1');
  }

  get femaleRadioBtn() {
    return this.page.locator('#id_gender2');
  }
  get password(){
      return this.page.locator('[data-qa="password"]');
  }
  get day(){
     return this.page.locator('[data-qa="days"]');
  }
  get month(){
     return this.page.locator('[data-qa="months"]');
  }
   get year(){
     return this.page.locator('[data-qa="years"]');
  }
  get first_name(){
    return this.page.locator('[data-qa="first_name"]')
  }
  get last_name(){
    return this.page.locator('[data-qa="last_name"]')
  }
  get company(){
    return this.page.locator('[data-qa="company"]')
  }
  get address(){
    return this.page.locator('[data-qa="address"]')
  }
  get address2(){
    return this.page.locator('[data-qa="address2"]')
  }
  get country(){
    return this.page.locator('[data-qa="country"]')
  }
  get state(){
    return this.page.locator('[data-qa="state"]')
  }
  get city(){
    return this.page.locator('[data-qa="city"]')
  }
  get zipcode(){
    return this.page.locator('[data-qa="zipcode"]')
  }
  get mobile_number(){
    return this.page.locator('[data-qa="mobile_number"]')
  }
  get enterAccountInfoTitle() {
  return this.page.getByText('Enter Account Information', { exact: true });
  }
  get newsletterCheckbox(){
    return this.page.locator('#newsletter')
  }
  get optinCheckbox(){
    return this.page.locator('#optin')
  }

    async verifyTitle(){
        await super.waitForElementVisible(this.enterAccountInfoTitle)
    }

  /**
   * Selecciona un radio button aleatorio entre Mr o Mrs
   * @returns {'macho' o 'hembra'}
   */
  async selectRandomGender() {
    const genders = [
      { type: 'male', locator: this.maleRadioBtn },
      { type: 'female', locator: this.femaleRadioBtn },
    ];

    const randomGender = genders[Math.floor(Math.random() * genders.length)];

    await this.clickElement(randomGender.locator);


    return randomGender.type;
  }

  async enterAccountInformation(user) {
  await this.selectRandomGender();
  await super.fillInput(this.password, user.account.password);
  await super.selectByValue(this.day, user.account.birthDate.day);
  await super.selectByValue(this.month, user.account.birthDate.month);
  await super.selectByValue(this.year, user.account.birthDate.year);
  await super.fillInput(this.first_name, user.personal.firstName);
  await super.fillInput(this.last_name, user.personal.lastName);
  await super.fillInput(this.company, user.personal.company);
  await super.fillInput(this.address, user.address.address1);
  await super.fillInput(this.address2, user.address.address2);
  await super.selectByValue(this.country, user.address.country);
  await super.fillInput(this.state, user.address.state);
  await super.fillInput(this.city, user.address.city);
  await super.fillInput(this.zipcode, user.address.zipcode);
  await super.fillInput(this.mobile_number, user.contact.mobile);
  await super.clickElement(this.newsletterCheckbox);
  await super.clickElement(this.optinCheckbox)
}

}

module.exports = SignUpPage;
