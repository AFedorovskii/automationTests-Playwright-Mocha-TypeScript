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
    //http://automationpractice.com/index.php?controller=identity
    msgUpd = '.alert.alert-success'
    //http://automationpractice.com/index.php
    searchField = '#search_query_top'
    //http://automationpractice.com/index.php?controller=search&orderby=position&orderway=desc&search_query=blouse&submit_search=
    blouseImg = 'img[title="Blouse"]'
    //http://automationpractice.com/index.php?id_product=2&controller=product&search_query=blouse&results=1
    addToCartBtn = '#add_to_cart'
    proceedBtn = '[title="Proceed to checkout"]'
    //http://automationpractice.com/index.php?controller=order
    cartItem = '#product_2_7_0_482582'
    trashBtn = '.icon-trash'
}