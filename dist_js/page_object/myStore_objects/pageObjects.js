"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageObjects = void 0;
const testData_1 = require("./testData");
class PageObjects extends testData_1.TestData {
    constructor() {
        super(...arguments);
        this.myStoreUrl = 'http://automationpractice.com/index.php';
        this.signInBtn = '.login';
        this.emailField = '#email';
        this.passwordField = '#passwd';
        this.subSignInBtn = '#SubmitLogin';
        this.logo = '.logo.img-responsive';
        this.accInfoBtn = 'a[title="View my customer account"]';
        this.myPersInfo = '[title="Information"]';
        this.firstName = '#firstname';
        this.lastName = '#lastname';
        this.olPassField = '#old_passwd';
        this.saveBtn = '[name="submitIdentity"]';
    }
}
exports.PageObjects = PageObjects;
//# sourceMappingURL=pageObjects.js.map