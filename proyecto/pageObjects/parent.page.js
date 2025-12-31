class ParentPage{
    constructor(page){
        this.page = page;
    }

     /**
     * Function to click on an element
     * @param {import("@playwright/test").Locator} element
     * @returns {Promise<void>}
     */
    async clickElement(element){
        await element.waitFor()
        await element.click()

    }

    async fillInput(element,text){
        await element.waitFor()
        await element.fill(text)
    }

    async waitForElementVisible(element){
        await element.waitFor({state:'visible'})
    }

    /** function to wait an url to happen on the page
     *   @param {string} url
     */
    async waitForUrlOnPage(url){
        await this.page.waitForURL(url)
    }

// Selecciona valor en dropdown/select, lo cree para el selector de fecha 
async selectByValue(element, value) {
  await element.waitFor();
  await element.selectOption(value);
}


}
module.exports = ParentPage