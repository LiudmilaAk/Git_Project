class Favorites {
    constructor(page) {
        this.page = page;
        this.buttonAddToFavorites = page.locator('.i-button.i-button_small.addto-favs');
        this.buttonConfirmAddToFavorites = page.locator('.addto-favs-yes');
        this.buttonCancelAddToFavorites = page.locator('.addto-favs-no');
        this.linkFavorites = page.locator('//span[contains(text(), "Избранное")]');
        this.counterFavorites = page.locator('//span/span[@data-user-bar-target="favoriteCounter"]');
        this.lastAddedFavoritesItem = page.locator('//div[@id="goods-table"]/*[1]');
        this.deleteIconOnFavoritesPage = page.locator('.viewer-type-card--js-active.viewer-type-card_has-filter.viewer-type-card li:nth-child(1) .i-icon-2_delete');
    }

    async addItemToFavorites() {
        await this.page.waitForTimeout(1000);
        await this.buttonAddToFavorites.click();
    }

    async goToFavoritesPage() {
        await this.page.waitForTimeout(1000);
        await this.linkFavorites.click();
    }

}

module.exports = Favorites;