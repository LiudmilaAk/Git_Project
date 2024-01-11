const { test, expect } = require('@playwright/test');
const MainPage = require('../pageObjects/mainPage');
const Header = require('../pageObjects/components/header');
const Login = require('../pageObjects/login');

test.describe(`test OZ.by website`, async function () {
    let mainPage;
    let header;
    let login;

test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page);
    header = new Header(page);
    login = new Login(page);
    await mainPage.navigate('https://oz.by/');
  });

  test('should Login with Email', async () => {
    await header.loginIcon.click();
    await login.loginWithEmail('haroshik14@mail.ru', '98dB26');
    await expect(login.nickname).toBeVisible();
    await expect(login.nickname).toContainText('Мой OZ');
      
  });

  test('should not Login with Invalid Email', async () => {
    await header.loginIcon.click();
    await login.loginWithEmail('haroshik1466454@mail.ru', '98dB26');
    await expect(login.invalidLogin).toBeVisible();
    await expect(login.invalidLogin).toContainText('Адрес электронной почты не зарегистрирован');
    
});

test('should not Login with Invalid Password', async () => {
    await header.loginIcon.click();
    await login.loginWithEmail('haroshik14@mail.ru', '98dusjs');
    await expect(login.invalidPassword).toBeVisible();
    await expect(login.invalidPassword).toContainText('Неверный пароль');
  
});


test('should not Login with No Password', async () => {
    await header.loginIcon.click();
    await login.loginWithEmail('haroshik14@mail.ru', '');
    await expect(login.noPasswordOrUsername).toBeVisible();
    await expect(login.noPasswordOrUsername).toContainText('Введите пароль');
    
  });

  test('should not Login with No Username', async () => {
    await header.loginIcon.click();
    await login.loginWithEmail('', '98dB26');
    await expect(login.noPasswordOrUsername).toBeVisible();
    await expect(login.noPasswordOrUsername).toContainText('Введите адрес электронной почты');
    
  });

});