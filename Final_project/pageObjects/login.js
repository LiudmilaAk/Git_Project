class Login {
    constructor(page) {
        this.page = page;
        this.loginFormMobile = page.locator('.i-popup__group.i-popup__group_responsive');
        this.loginFormEmail = page.locator('#loginFormLoginEmailLink');
        this.username = page.locator('//div[@class = "i-input-group__cell"]//input[@class = "i-input i-input_full-width i-popup__input"]');
        this.password = page.locator('//input[@tabindex="2"]');
        this.loginButtonForEmailForm = page.locator('//button[contains(text(),"Войти")]');
        this.nickname = page.locator('//a[@href="/personal/orders/"]/span[@class="user-bar__title"]');
        this.invalidLogin = page.locator ('//a[@data-button-state="toreg"]/..');
        this.invalidPassword = page.locator ('//a[@data-button-state="toremind"]/..');
        this.noPasswordOrUsername = page.locator ('div.i-input-group__popover_visible .i-popover__line');
                   
    }

    async goToLoginWithEmail(username, password) {
        await this.loginFormMobile.isEnabled();
        await this.loginFormEmail.click();
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButtonForEmailForm.isEnabled();
        await this.loginButtonForEmailForm.click();
        await this.loginButtonForEmailForm.click();

    }
    

}

module.exports = Login;