const { test, expect } = require('@playwright/test');
const MainPage = require('../pageObjects/mainPage');
const SearchField = require('../pageObjects/components/searchField');
const Header = require('../pageObjects/components/header');
const Login = require('../pageObjects/login');
const Cart = require('../pageObjects/cart');

test.describe(`test OZ.by website, cart`, async function () {
    let mainPage;
    let searchField;
    let header;
    let login;
    let cart;
       
test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page);
    searchField = new SearchField(page);
    header = new Header(page);
    login = new Login(page);
    cart = new Cart(page);
    await mainPage.navigate('https://oz.by/');
    await header.loginIcon.click();
    await login.loginWithEmail('haroshik14@mail.ru', '98dB26');
    });


    test('should add items in the cart', async function () {
    await header.searchField.click();
    await searchField.findItemsBySearchField('JavaScript');
    await cart.firstItem.click();
    await expect(cart.buttonAboutProductAlreadyInCart).toContainText('В корзине');
    });

    
    test('should choose all items from the cart', async function () {
    await header.cartIcon.click();
    await cart.checkboxInCartChooseAll.click();
    await expect(cart.checkboxInCartChooseAll).toBeTruthy();
    });


    test('should deselect all products in the cart', async function () {
    await header.cartIcon.click();
    await cart.checkboxInCartChooseAll.dblclick();
    await expect(cart.checkboxInCartChooseAll).toBeTruthy();
    });


    test('should cancel deleting all products and close the modal window', async function () {
    await header.cartIcon.click();
    await cart.checkboxInCartChooseAll.click();
    await cart.deleteFromCart();
    await cart.buttonCancelDeletionFromCart.click();
    await expect(cart.cartCounter).toContainText('4');
    });


    test('should delete all chosen items from the cart', async function () {
    await header.cartIcon.click();
    await cart.checkboxInCartChooseAll.click();
    await cart.deleteFromCart();
    await cart.buttonConfirmDeletionFromCart.click();
    await expect(cart.cartCounter).toContainText('');
    });

});