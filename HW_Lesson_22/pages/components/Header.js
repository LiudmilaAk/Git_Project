class Header {
    constructor(page) {
      this.page = page;
      this.topNavLinks = "div.navbar__items:first-of-type .navbar__link";
      this.colorModeToggle = '.toggle_vylO.colorModeToggle_DEke';
      this.docSearchButton = '.DocSearch-Button'; 
      this.docSearchInput = 'input.DocSearch-Input'; 
      this.docSearchHitContainer = '.DocSearch-Hit-Container';
    }

    async goToPageWithTopNavMenu(linkNumber) {
        const topNavLink = await this.page.locator(this.topNavLinks).nth(linkNumber);
        await topNavLink.click();
      }
  
    async switchBetweenLightAndDarkMode() {
      const toggle = await this.page.locator(this.colorModeToggle);
      await toggle.click();
    }
  
    async searchInSearchField(searchQuery, linkNumber) {
      const searchButton = await this.page.locator(this.docSearchButton);
      await searchButton.click();
  
      const searchInput = await this.page.locator(this.docSearchInput);
      await searchInput.waitFor({ state: 'visible' });
      await searchInput.fill(searchQuery);
  
      const searchHit = await this.page.locator(this.docSearchHitContainer).nth(linkNumber);
      await searchHit.click();
    }
  
    }
  
  module.exports = Header;
  