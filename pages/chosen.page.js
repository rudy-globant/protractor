module.exports = function () {
    this.countries = element(by.xpath(".//*[@id='content']/div[1]/div[2]/div/a"));
    this.countryInput = element(by.xpath(".//*[@id='content']/div[1]/div[2]/div/div/div/input"));
    this.countryItem = element(by.xpath(".//*[@id='content']/div[1]/div[2]/div/div/ul/li"));

    this.get = function () {
        browser.get('https://harvesthq.github.io/chosen/');
    }

    this.getTitle = function () {
        return browser.getTitle();
    }

    this.showCountries = function () {
        this.countries.click();
    }

    this.changeCountry = function (country) {
        this.countryInput.sendKeys(country);
        this.countryItem.click();
    }
}