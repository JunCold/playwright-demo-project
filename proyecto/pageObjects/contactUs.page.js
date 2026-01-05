const ParentPage = require("./parent.page");

class ContactUsPage extends ParentPage{
    constructor(page){
        super(page);
        this.page = page;
    }
 
   get getInTouchHeader() {
        return this.page.getByRole('heading', { name: 'Get In Touch' });
    }

    get NameInput(){
        return this.page.locator('[data-qa="name"]')
    }
    get EmailInput(){
        return this.page.locator('[data-qa="email"]')
    }
    get SubjectInput(){
        return this.page.locator('[data-qa="subject"]')
    }
    get MessageInput(){
        return this.page.locator('[data-qa="message"]')
    }
    get uploadFileInput() {
        return this.page.locator('input[type="file"][name="upload_file"]');
    }
    get submitBtn() {
        return this.page.locator('[data-qa="submit-button"]');
    }

    async fillContactUsForm({
  name,
  email,
  subject,
  message,
  filePath
}) {
  await super.fillInput(this.NameInput, name);
  await super.fillInput(this.EmailInput, email);
  await super.fillInput(this.SubjectInput, subject);
  await super.fillInput(this.MessageInput, message);

  if (filePath) {
    await this.uploadFileInput.setInputFiles(filePath);
  }
 
}

async clicksubmitBtn(){
    await super.clickElement(this.submitBtn);
}





}

module.exports = ContactUsPage;
