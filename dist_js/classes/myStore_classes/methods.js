"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Method = void 0;
const pageObjects_1 = require("../../page_object/myStore_objects/pageObjects");
const chai_1 = require("chai");
class Method extends pageObjects_1.PageObjects {
    constructor(page) {
        super();
        this.page = page;
    }
    async navigate() {
        await this.page.goto(this.myStoreUrl);
        await this.page.isVisible(this.logo);
        await console.log(`>Go to - ${this.myStoreUrl}`);
    }
    ;
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
        chai_1.expect(url).equal('http://automationpractice.com/index.php?controller=my-account');
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
        let upd = await this.page.innerText('.alert.alert-success');
        chai_1.expect(upd).contain('Your personal information has been successfully updated.');
    }
    async goHomePage() {
        await this.page.click(this.logo);
        await console.log(`>Click Logo`);
    }
    async searchBlouse() {
        await this.page.fill('#search_query_top', 'blouse');
        await console.log(`>Fill blouse`);
        await this.page.press('#search_query_top', 'Enter');
        await console.log(`>Press Enter`);
        await this.page.click('img[title="Blouse"]');
        await this.page.waitForSelector('#add_to_cart');
        await this.page.click('#add_to_cart');
        await this.page.click('[title="Proceed to checkout"]');
        let a = await this.page.isVisible('#product_2_7_0_482582');
        chai_1.expect(a).to.exist;
        await this.page.click('.icon-trash');
    }
}
exports.Method = Method;
//# sourceMappingURL=methods.js.map