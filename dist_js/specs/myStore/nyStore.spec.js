"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const playwright_1 = require("playwright");
const methods_1 = require("../../classes/myStore_classes/methods");
describe("Tests", async () => {
    let browser;
    let page;
    before(async () => {
    });
    after(async () => {
    });
    beforeEach(async () => {
        browser = await playwright_1.chromium.launch({ headless: false, slowMo: 10 });
        page = await browser.newPage();
        console.log('<---------------------->');
    });
    afterEach(async () => {
        await browser.close();
    });
    it('Test1: Login to My Store', async () => {
        const method = new methods_1.Method(page);
        await method.navigate();
        await method.login();
    });
    it('Test2: Change Personal Info', async () => {
        const method = new methods_1.Method(page);
        await method.navigate();
        await method.login();
        await method.goPersonalInfo();
        await method.changePersonalInfo();
    });
    it('Test3: Buy Blouse', async () => {
        const method = new methods_1.Method(page);
        await method.navigate();
        await method.login();
        await method.goHomePage();
        await method.searchBlouse();
        //await page.waitForTimeout(5000)
    });
});
//# sourceMappingURL=nyStore.spec.js.map