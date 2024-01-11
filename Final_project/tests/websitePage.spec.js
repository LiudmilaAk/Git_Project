const { test, expect } = require('@playwright/test');
const MainPage = require('../pageObjects/mainPage');
const Header = require('../pageObjects/components/header');
const TopNavMenu = require('../pageObjects/topNavMenu');

test.describe(`test OZ.by website`, async function () {
    let mainPage;
    let header;
    let topNavMenu;

test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page);
    topNavMenu = new TopNavMenu(page);
    header = new Header(page);
    await mainPage.navigate('https://oz.by/');
});


test('should contain logo and appropriate title', async () => {
    await mainPage.logo.isVisible();
    await expect(mainPage.page).toHaveTitle('OZ.by — интернет-магазин. Книги, игры, косметика, товары для дома, творчества, подарки, продукты. Доставка по Беларуси.');
    });


test('should open help page by clicking the icon in header', async () => {
    await header.helperLink.click();
    await expect(topNavMenu.breadCrumbLink).toContainText('Служба поддержки');
    });


test('should open page with sales by clicking "Акции и скидки" link in main navigation menu', async () => {
    await mainPage.mainNavigationMenuSales.click();
    await expect(topNavMenu.breadCrumbSearchResults).toContainText('Акции и скидки');
    });


test('should open selected item from collapsible menu', async () => {
    await mainPage.mainNavigationMenuBooks.hover();
    await mainPage.mainNavigationMenuBooksOption.click();
    await expect(topNavMenu.breadCrumbSearchResults).toContainText('Детектив');
    });

test('should show only shops in the selected city', async () => {
    await mainPage.ozShops.hover();
    await mainPage.cityMinsk.click();
    await expect(mainPage.cityStores).toContainText('Все товары в Минске');
    });

});