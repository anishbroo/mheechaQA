const { test, expect } = require('@playwright/test');
const testData = require('../../fixtures/loginFixture.json');
const testData1 = require('../../fixtures/searchFixture.json');
const testData2 = require('../../fixtures/contactFixture.json');
const LoginPage = require('../../pageObjects/login.po');
const ContactPage = require('../../pageObjects/contact.po');
const { log } = require('console');

test.describe.configure({ timeout: 60000 });


test.beforeEach(async({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();

    await loginPage.clickLoginText();
    await loginPage.fill(testData.validLogin.userName, testData.validLogin.password);
    await loginPage.clickSignIn();
});


test.describe('Login test', () => {
    test('Valid Login', async({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.clickLoginText();
        await loginPage.fill(testData.validLogin.userName, testData.validLogin.password);
        await loginPage.clickSignIn();

    });
})


test.describe('Search, add to cart, checkout, make purchase', () => {
    test('Search add to cart', async({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.searchInputfn();
        await loginPage.searchBar(testData1.searchValidCategory.product);
        await loginPage.productImagefn();
        await loginPage.quantityfn();
        await loginPage.addtocartfn();
        await loginPage.checkoutfn();

        const contact = new ContactPage(page);
        await contact.billingAddress(testData2.contact.firstName, testData2.contact.lastName, testData2.contact.company, testData2.contact.address, testData2.contact.city);
        await contact.orderfn();

        await loginPage.clickLoginText1();
        await loginPage.logoutfn();
    })
})