import type { Page,Locator } from '@playwright/test';

export class SearchPage {
    readonly page: Page;
    readonly searchLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchLink = page.locator("//input[@name='q']");
    }

    async open() {
        await this.page.goto('https://google.com/');   
    }
    
    async find(search_request: string) {
        await this.searchLink.fill(search_request);
        await this.page.keyboard.press('Enter');
        await this.page.waitForSelector('#hdtb')
    }
}