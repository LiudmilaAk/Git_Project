class HomePage {
    open() {
      return browser.url("https://webdriver.io/");
    }
  
    getTitle() {
      return browser.getTitle();
    }
  
    isLogoDisplayed() {
      return $(".svg_j3ED").isDisplayed();
    }
  
    isSearchBoxDisplayed() {
      return $(".DocSearch-Button-Placeholder").isDisplayed();
    }
  
    goToDocsPage() {
      const docsLink = $("=Docs");
      if (!docsLink.isDisplayed()) {
        const menuButton = $(".navbar__toggle");
        menuButton.click();
      }
      docsLink.click();
    }
  
    goToAPIPage() {
      const apiLink = $("=API");
      if (!apiLink.isDisplayed()) {
        const menuButton = $(".navbar__toggle");
        menuButton.click();
      }
      apiLink.click();
    }
  }
  
  module.exports = new HomePage();
  