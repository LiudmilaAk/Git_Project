class Cart {
    constructor(page) {
        this.page = page;
        this.firstItem = page.locator('//div[@id="goods-table"]/*[1]/div[@class="product-card__footer"]/form/button');
        this.checkboxInCart = page.locator('.goods-table__body tr:nth-child(2) .i-checkbox.i-checkbox_large');
        this.buttonDeleteFromCart = page.locator('.i-button_small.remove');
        this.buttonConfirmDeletionFromCart = page.locator('.remove-yes');
        this.buttonCancelDeletionFromCart = page.locator('.remove-no');
        this.checkboxInCartChooseAll = page.locator('.i-checkbox__real.checkAll');
        this.cartCounter = page.locator('span#cart-count');
        this.buttonAboutProductAlreadyInCart = page.locator('//form/a[@href="/checkout/"]'); 
    }

    async checkIfProductIsAddedOnCartPage(productName) {
        const cartPageContain = await this.cartPageContain(productName);
        await this.page.waitForSelector(cartPageContain);
        await this.page.hover(cartPageContain);
    }

    async fillCart() {
        await this.firstItem.click();
        }

    async chooseItem(itemNumber) {
        await this.firstItem.click(itemNumber);
        await this.newItem.click();
    }

    async deleteFromCart() {
        await this.page.waitForTimeout(1000);
        await this.buttonDeleteFromCart.click();
        await this.page.waitForTimeout(1000);
    }
}

module.exports = Cart;