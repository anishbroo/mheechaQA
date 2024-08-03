class LoginPage {
    constructor(page) {

        //login
        this.page = page;
        this.loginText = page.locator('//*[@id="menu-item-21956"]/a');
        this.inputEmail = page.locator('//*[@id="username"]');
        this.inputPassword = page.locator('//*[@id="password"]');
        this.signInButton = page.locator('//*[@id="customer_login"]/div[1]/form/p[3]/input[3]');

        //search
        this.searchInput = page.locator('//*[@id="s"]');
        this.productImage = page.locator('//*[@id="content"]/ul/li[1]/div[1]/a/img');
        this.quantity = page.locator('//*[@id="product-33802"]/div[2]/div/form/div[7]/input[3]');
        this.addtocart = page.locator('//*[@id="product-33802"]/div[2]/div/form/button');
        this.checkout = page.locator("//a[@href='https://www.mheecha.com/checkout/' and contains(text(), 'Proceed to Checkout')]");

        //logout
        this.loginText1 = page.locator('//*[@id="menu-item-21956"]/a');
        this.logout = page.locator("//div[@class='container']//div//p[1]/a");
    }

    //login
    async navigate() {
        await this.page.goto('https://www.mheecha.com/');
    }

    async clickLoginText() {
        await this.loginText.click();
    }

    async fill(email, password) {
        await this.inputEmail.fill(email);
        await this.inputPassword.fill(password);
    }

    async clickSignIn() {
        await this.signInButton.click();
    }

    //search
    async searchInputfn() {
        await this.searchInput.click();
    }

    async searchBar(boulder) {
        await this.searchInput.fill(boulder);
        await this.searchInput.press('Enter');
    }

    async productImagefn() {
        await this.productImage.click();
    }

    async quantityfn() {
        await this.quantity.click();
    }

    async addtocartfn() {
        await this.addtocart.click();
    }

    async checkoutfn() {
        await this.checkout.click();
    }

    //logout
    async clickLoginText1() {
        await this.page.waitForTimeout(4000);
        await this.loginText1.click();
    }
    async logoutfn() {
        await this.logout.click();
    }

}

module.exports = LoginPage;