class Header {
    constructor(page) {
        this.page = page;
        this.loginIcon = page.locator('//span[contains(text(), "Войти")]/..');
        this.searchField = page.locator('input#top-s');
        this.cartIcon = page.locator('//a[@href="/checkout/"]/span[@class="user-bar__title"]');
        this.topMainNavLinks = page.locator('.main-nav');
        this.topMainNavSubLinks = page.locator('//href[@class="menu-link-action main-nav__list__item "]');
        this.accountLink = page.locator('.top-panel__userbar__user__name');
        this.authorizationButton = page.locator('.top-panel__userbar__auth__lbl');
        this.helperLink = page.locator ('//a[@href="/help" and contains(@class, "user-bar__item")]');
    }
}

module.exports = Header;