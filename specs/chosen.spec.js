var ChosenPage = require('../pages/chosen.page.js');

describe('Chosen Demo App', function () {
    var chosenPage = new ChosenPage();

    beforeEach(function () {
        chosenPage.get();
    });

    it('Should has a title', function () {
        expect(chosenPage.getTitle()).toMatch(/chosen/i);
    })

    it('Should change the country to "Peru"', function () {
        chosenPage.showCountries();
        chosenPage.changeCountry("Peru");
        expect(chosenPage.getTitle()).toMatch(/chosen/i);
    })

});