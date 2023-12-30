class Footer {
    constructor(page) {
      this.page = page;
      this.downNavLinks = ".footer__link-item";
    }
  
    async goToPageWithDownNavMenu(linkNumber) {
      const downNavLink = await this.page.locator(this.downNavLinks).nth(linkNumber);
      await downNavLink.click();
    }
  }
  
  module.exports = Footer;
  