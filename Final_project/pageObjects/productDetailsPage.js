class ProductPage {
    constructor(page) {
        this.page = page;
        this.buttonAddToFavoritesFromProductPage = page.locator('//div[@class="b-product__media"]//span[@class="b-product-action__text b-product-action__text_in"]');
        this.buttonAlreadyAddedToFavoritesFromProductPage = page.locator('//div[@class="b-product__media"]//span[@class="b-product-action__text b-product-action__text_out"]');
        this.product = async (productName) => {
            return `div.products__grid:first-child div.products__item:first-child img [alt = '${await productName}']`;
        };
    }

}

module.exports = ProductPage;