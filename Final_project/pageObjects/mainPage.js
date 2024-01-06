class MainPage {
    constructor(page) {
        this.page = page;
        this.logo = page.locator('//a[contains(@class, "header__brand")]/img');
        this.searchField = page.locator('input#top-s');
        this.pageTitleContainText = page.locator('//h1[@class ="landing-header__title"]');
        this.mainNavigationMenuSales = page.locator ('//a[contains(text(), "Акции и скидки")]');
        this.mainNavigationMenuBooks = page.locator ('//a[@href="/books/" and contains(@class, "main-nav__list__item")]');
        this.mainNavigationMenuBooksOption = page.locator ('//a[contains(text(), "Детектив")]');
        this.ozShops = page.locator ('//a[@href="/store/" and contains(@class, "main-nav__list__item")]');
        this.cityMinsk = page.locator ('//a[@data-city="minsk"]');
        this.cityStores = page.locator ('//a[@href="/store/minsk"]/span');
          
    }

    async navigate(url) {
        await this.page.goto(url);
    }
}

module.exports = MainPage;