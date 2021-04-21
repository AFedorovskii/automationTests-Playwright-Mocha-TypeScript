import {TestData} from "./testData";

export class PageObjects extends TestData {

    myStoreUrl = 'http://automationpractice.com/index.php'
    signInBtn = '.login'
    emailField = '#email'
    passwordField = '#passwd'
    subSignInBtn = '#SubmitLogin'
    logo = '.logo.img-responsive'
    accInfoBtn = 'a[title="View my customer account"]'
    myPersInfo = '[title="Information"]'
    firstName = '#firstname'
    lastName = '#lastname'
    olPassField = '#old_passwd'
    saveBtn = '[name="submitIdentity"]'
}