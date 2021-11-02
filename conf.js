exports.config = {
    multiCapabilities: [
        {
            'browserName': 'firefox'
        },
        {
            'browserName': 'chrome',
        },
        {
            'browserName': 'MicrosoftEdge',
        }
    ],
    seleniumAddress: 'http://192.168.1.45:4444/wd/hub',
    specs: ['./**/*.spec.js'],
    framework: 'jasmine2',
    onPrepare: function () {
        //this allows to test non-angular applicaitons
        browser.ignoreSynchronization = true;

        browser.getCapabilities().then(function (cap) {
            browserName = cap.map_.get('browserName');
            var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
            var folderName = yyyymmdd_hhiiss() + '_' + browserName
            jasmine.getEnv().addReporter(
                new Jasmine2HtmlReporter({
                    savePath: './test_reports/' + folderName + '/',
                    fileName: 'index.html'
                })
            );
        })
    },
    suites: {
        google: './specs/google.spec.js',
        chosen: './specs/chosen.spec.js'
    }
};

function yyyymmdd_hhiiss() {
    var x = new Date();
    var y = x.getFullYear().toString();
    var m = (x.getMonth() + 1).toString();
    var d = x.getDate().toString();
    (d.length == 1) && (d = '0' + d);
    (m.length == 1) && (m = '0' + m);
    return y + m + d + '_' + x.toTimeString().split(' ')[0].replace(/:/gi, '');
}
