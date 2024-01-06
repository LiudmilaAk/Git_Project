class SearchField {
    constructor(page) {
        this.page = page;
        this.searchField = page.locator('.input#top-s');
        this.activeSearchFieldForFinding = page.locator('input#top-s');
        this.searchIcon = page.locator('.top-panel__search__btn');
        this.searchSuggestion = page.locator('.search-suggest .suggest-link');
    }

async findItemsBySearchField(text) {
    await this.activeSearchFieldForFinding.type(text);
    await this.activeSearchFieldForFinding.press('Enter');
}

}

module.exports = SearchField;