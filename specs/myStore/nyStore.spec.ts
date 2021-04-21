import {chromium, ChromiumBrowser, Page} from "playwright";
import {Method} from "../../classes/myStore_classes/methods";

describe("Tests", async () => {
    let browser: ChromiumBrowser;
    let page: Page;

    before(async () => {
    });
    after(async () => {
    });
    beforeEach(async () => {
        browser = await chromium.launch({headless: false, slowMo: 10});
        page = await browser.newPage();
        console.log('<---------------------->');
    });
    afterEach(async () => {
        await browser.close();
    })
    it('Test1: Login to My Store', async () => {
        const method = new Method(page);
        await method.navigate();
        await method.login();
    });
    it('Test2: Change Personal Info', async () => {
        const method = new Method(page);
        await method.navigate();
        await method.login();
        await method.goPersonalInfo();
        await method.changePersonalInfo();
    })
    it.only('Test3: Buy Blouse', async () => {
        const method = new Method(page);
        await method.navigate();
        await method.login();
        await method.goHomePage();
        await method.searchBlouse();
        await page.waitForTimeout(5000)

    })

})