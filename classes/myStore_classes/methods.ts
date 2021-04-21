import {Page} from "playwright";
import {PageObjects} from "../../page_object/myStore_objects/pageObjects";
import {expect} from 'chai';

export class Method extends PageObjects {
    private page: any;

    constructor(page: Page) {
        super();
        this.page = page;
    }

    async navigate() {
        await this.page.goto(this.myStoreUrl);
        await this.page.isVisible(this.logo);
        await console.log(`>Go to - ${this.myStoreUrl}`);
    };

    async login() {
        await this.page.click(this.signInBtn);
        await console.log(`>Click Sign In`);
        await this.page.fill(this.emailField, this.email);
        await console.log(`>Fill ${this.email}`);
        await this.page.fill(this.passwordField, this.password);
        await console.log(`>Fill ${this.password}`);
        await this.page.click(this.subSignInBtn);
        await console.log(`>Click Submit`);
        let url = await this.page.url();
        expect(url).equal('http://automationpractice.com/index.php?controller=my-account')
    }

    async goPersonalInfo() {
        await this.page.click(this.accInfoBtn);
        await console.log(`>Click Account Info`);
        await this.page.click(this.myPersInfo);
        await console.log(`>Click My Personal Information`);
    }

    async changePersonalInfo() {
        await this.page.fill(this.firstName, 'Petr');
        await console.log(`>Fill First Name`);
        await this.page.fill(this.lastName, 'Petrov');
        await console.log(`>Fill Last Name`);
        await this.page.fill(this.olPassField, this.password);
        await console.log(`>Fill Password`);
        await this.page.click(this.saveBtn);
        await console.log(`>Click Save`);
        let upd = await this.page.innerText(this.msgUpdSucces);
        expect(upd).contain('Your personal information has been successfully updated.');
    }
    async goHomePage() {
        await this.page.click(this.logo);
        await console.log(`>Click Logo`);
    }
    async searchBlouse() {
        await this.page.fill(this.searchField, 'blouse');
        await console.log(`>Fill blouse`);
        await this.page.press(this.searchField, 'Enter');
        await console.log(`>Press Enter`);
        await this.page.click(this.blouseImg);
        await this.page.waitForSelector(this.addToCartBtn);
        await this.page.click(this.addToCartBtn);
        await this.page.click(this.proceedBtn);
        let a = await this.page.isVisible(this.cartItem);
        expect(a).to.exist;
        await this.page.click(this.trashBtn);
    }

}