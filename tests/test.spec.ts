import { test, expect } from '@playwright/test';

import { testdata } from '../test-data/test-data';
import { SearchPage } from '../pages/search-page';
import { ContentPage } from '../pages/content-page';

for (let data of testdata.searchRequest) {
    test(`Search '${data}' and validation on content page`, async ({ page }) => {
        const searhcpage = new SearchPage(page);
        await searhcpage.open();
        await searhcpage.find(data);
        
        const contentpage = new ContentPage(page);
        await expect(await contentpage.getSearchText()).toEqual(data);
    });
}
