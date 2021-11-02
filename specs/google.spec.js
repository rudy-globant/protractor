var GooglePage = require('../pages/google.page.js');

describe('Google Demo App', function () {
    var googlePage = new GooglePage();

    beforeEach(function () {
        googlePage.get();
    });

    it('Should has Google as title', function () {
        expect(googlePage.getTitle()).toEqual('Google');
    })

    it('Should show results related to "Lima"', function () {
        googlePage.search("Lima");
        expect(googlePage.getTitle()).toMatch(/lima/i);
        expect(googlePage.getResultsText()).not.toBe('');
    })
});