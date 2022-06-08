import type { Page,Locator } from '@playwright/test';

export class ContentPage {

    readonly page: Page;
    readonly searchLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchLink = page.locator("//input[@name='q' and @type='text']");
    }

    async getSearchText(){ 
        return this.searchLink.inputValue();
    }
}