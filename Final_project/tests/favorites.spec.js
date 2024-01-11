const { test, expect } = require('@playwright/test');
const MainPage = require('../pageObjects/mainPage');
const Cookies = require('../pageObjects/components/cookies');
const SearchField = require('../pageObjects/components/searchField');
const Header = require('../pageObjects/components/header');
const Login = require('../pageObjects/login');
const Cart = require('../pageObjects/cart');
const Favorites = require('../pageObjects/favorites');
const ProductPage = require('../pageObjects/productDetailsPage');

test.describe(`test OZ.by website`, async function () {
    let mainPage;
    let cookies;
    let login;
    let header;
    let cart;
    let searchField;
    let favorites;
    let productPage;

test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page);
    cookies = new Cookies(page);
    login = new Login(page);
    header = new Header(page);
    cart = new Cart(page);
    searchField = new SearchField(page);
    favorites = new Favorites(page);
    productPage = new ProductPage(page);
    await mainPage.navigate('https://oz.by/');
    await cookies.acceptCookies;
    const productName = 'когтеточка';
    await header.loginIcon.click();
    await login.loginWithEmail('haroshik14@mail.ru', '98dB26');
    await header.searchField.click();
    await searchField.findItemsBySearchField(productName);
    await cart.firstItem.click();
    await header.cartIcon.click();
    await cart.checkboxInCart.click();
    await favorites.addItemToFavorites();
    });

test('should add item to favorites from the cart', async function () {
    await favorites.buttonConfirmAddToFavorites.click();
    await expect(favorites.counterFavorites).toContainText('27');
    });

test('should check that added item is on the favorites page', async function () {
    await favorites.buttonConfirmAddToFavorites.click();
    await favorites.linkFavorites.click();
    if (!await favorites.lastAddedFavoritesItem.isVisible()) {
        await favorites.linkFavorites.click();
    };
    await favorites.lastAddedFavoritesItem.click();
    await expect(productPage.buttonAlreadyAddedToFavoritesFromProductPage).toContainText('В избранном');
    });

test('should delete added item from favorites page', async function () {
    await favorites.buttonConfirmAddToFavorites.click();
    await favorites.linkFavorites.click();
    if (!await favorites.lastAddedFavoritesItem.isVisible()) {
        await favorites.linkFavorites.click();
    };
    await favorites.lastAddedFavoritesItem.click();
    await productPage.buttonAlreadyAddedToFavoritesFromProductPage.click();
    await expect(favorites.counterFavorites).toContainText('26');
    });

});