const { test, expect } = require('@playwright/test');
const MainPage = require('../pageObjects/mainPage');
const SearchField = require('../pageObjects/components/searchField');
const Header = require('../pageObjects/components/header');
const TopNavMenu = require('../pageObjects/topNavMenu');

test.describe(`test OZ.by website`, async function () {
    let mainPage;
    let searchField;
    let header;
    let topNavMenu;

test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page);
    header = new Header(page);
    searchField = new SearchField(page);
    topNavMenu = new TopNavMenu(page);
    await mainPage.navigate('https://oz.by/');
    });

test ('should open a new page with search results when using the search field', async () => {
    await header.searchField.click();
    await searchField.findItemsBySearchField('ЦТ');
    await expect(topNavMenu.breadCrumbLink).toContainText('ЦТ');
    });

test ('should show tips for searching for no search results', async () => {
    await header.searchField.click();
    await searchField.findItemsBySearchField('dfi;igh;oeairjhy;aiejt');
    await expect(topNavMenu.breadCrumbLink).toContainText('ничего не найдено');
    });


test ('should suggest the correct product when searching in the wrong language', async () => {
    await header.searchField.click();
    await searchField.findItemsBySearchField('Vfcrf lkz kbwa');
    await expect(topNavMenu.breadCrumbSearchResults).toContainText('маска для лица');
    });

});