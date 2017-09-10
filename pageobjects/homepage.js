//
//COMMENT:  This is the page object for the homepage
//

var HomePage = function () {

	CredaciousBasePage.call(this);  //call ctor
	
	this.config = {

		bannerText: ' Slice, Filter & Explore CrunchBase Data'
	}

	this.bannerText = function () {

		return $('div[class=header-text]').getText();
	}
};


module.exports = new HomePage();
