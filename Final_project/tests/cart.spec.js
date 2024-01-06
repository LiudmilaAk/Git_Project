const { test, expect } = require('@playwright/test');
const MainPage = require('../pageObjects/mainPage');
const SearchField = require('../pageObjects/components/searchField');
const Header = require('../pageObjects/components/header');
const Login = require('../pageObjects/login');
const Cart = require('../pageObjects/cart');
const ProductPage = require('../pageObjects/productDetailsPage');

test.describe(`test OZ.by website, cart`, async function () {
    let mainPage;
    let searchField;
    let header;
    let login;
    let cart;
    let productPage;
   
test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page);
    searchField = new SearchField(page);
    header = new Header(page);
    login = new Login(page);
    cart = new Cart(page);
    productPage = new ProductPage(page);
    await mainPage.navigate('https://oz.by/');
    await header.loginIcon.click();
    await login.goToLoginWithEmail('haroshik14@mail.ru', '98dB26');
    });


    test('1 - should add items in the cart', async function () {
    await header.searchField.click();
    await searchField.findItemsBySearchField('JavaScript');
    await cart.fillCart();
    await expect(cart.buttonAboutProductAlreadyInCart).toContainText('В корзине');
    });

    
    test('2 - should choose all items from the cart', async function () {
    await header.cartIcon.click();
    await cart.checkboxInCartChooseAll.click();
    await expect(cart.checkboxInCartChooseAll).toBeTruthy();
    });


    test('3 - should deselect all products in the cart', async function () {
    await header.cartIcon.click();
    await cart.checkboxInCartChooseAll.dblclick();
    await expect(cart.checkboxInCartChooseAll).toBeTruthy();
    });


    test('4 - should cancel deleting all products and close the modal window', async function () {
    await header.cartIcon.click();
    await cart.checkboxInCartChooseAll.click();
    await cart.deleteFromCart();
    await cart.buttonCancelDeletionFromCart.click();
    await expect(cart.cartCounter).toContainText('4');
    });


    test('5 - should delete all chosen items from the cart', async function () {
    await header.cartIcon.click();
    await cart.checkboxInCartChooseAll.click();
    await cart.deleteFromCart();
    await cart.buttonConfirmDeletionFromCart.click();
    await expect(cart.cartCounter).toContainText('');
    });

});