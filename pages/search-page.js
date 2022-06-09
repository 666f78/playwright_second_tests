exports.SearchPage = class SearchPage {

    constructor(page) {
        this.page = page;
        this.searchLink = page.locator("//input[@name='q']");
    }

    async open() {
        await this.page.goto('https://google.com/');   
    }
    
    async find(search_request) {
        await this.searchLink.fill(search_request);
        await this.page.keyboard.press('Enter');
        await this.page.waitForSelector('#hdtb')
    }
}