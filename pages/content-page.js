exports.ContentPage = class ContentPage {

    constructor(page) {
        this.page = page;
        this.searchLink = page.locator("//input[@name='q' and @type='text']");
    }

    async getSearchText(){ 
        return this.searchLink.inputValue();
    }
}