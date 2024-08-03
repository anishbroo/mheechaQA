class ContactPage {
    constructor(page) {
        this.page = page;
        this.firstName = page.locator('//*[@id="billing_first_name"]');
        this.lastName = page.locator('//*[@id="billing_last_name"]');
        this.company = page.locator('//*[@id="billing_company"]');
        this.address = page.locator('//*[@id="billing_address_1"]');
        this.city = page.locator('//*[@id="billing_city"]');
        this.radioButton = page.locator('//*[@id="payment_method_cod"]');

        this.order = page.locator('//*[@id="place_order"]');
    }


    async billingAddress(firstName, lastName, company, address, city) {
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.company.fill(company);
        await this.address.fill(address);
        await this.city.fill(city);
        await this.radioButton.click();
    }

    async orderfn() {
        await this.order.click();
    }
}

module.exports = ContactPage;