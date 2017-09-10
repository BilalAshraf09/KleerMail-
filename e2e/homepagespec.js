//
//COMMENT:  These are the  Homepage validity tests.
//


'use strict';

describe('Test valid Home page', function () {    

    var homePage = require('../pageobjects/homepage.js');


    beforeEach(function () {
        browser.get("http://crunchinator.com");
    });


    it ('and be a valid banner', function () {

        expect(homePage.bannerText()).toBe(homePage.config.bannerText, 'Banner text Is wrong');


    });   
});
