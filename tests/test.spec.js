const  { test, expect } = require('@playwright/test');

const { testdata } = require('../test-data/test-data');
const { SearchPage } = require('../pages/search-page');
const { ContentPage } = require('../pages/content-page');

for (let data of testdata.searchRequest) {
    test(`Search '${data}' and validation on content page`, async ({ page }) => {
        const searhcpage = new SearchPage(page);
        await searhcpage.open();
        await searhcpage.find(data);
        
        const contentpage = new ContentPage(page);
        await expect(await contentpage.getSearchText()).toEqual(data);
    });
}
