module.exports = function () {
    this.searchBox = element(by.name('q'));
    this.resultStats = element(by.id('result-stats'));

    this.get = function () {
        browser.get('http://google.com/');
    }

    this.getTitle = function () {
        return browser.getTitle();
    }

    this.search = function (searchTerm) {
        this.searchBox.sendKeys(searchTerm);
        this.searchBox.sendKeys(protractor.Key.ENTER);
        this.waitForElement(this.resultStats);
    }

    this.getResultsText = function () {
        return this.resultStats.getText();
    }

    this.waitForElement = function (element) {
        var until = protractor.ExpectedConditions;
        return browser.wait(until.presenceOf(element), 10000, 'Element taking too long to appear in the DOM');
    }
}