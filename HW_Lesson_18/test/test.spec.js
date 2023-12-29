const { Builder, By, until } = require('selenium-webdriver');
const { expect } = require('chai');

describe('Automated tests', () => {
  let driver;

  before(async () => {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.manage().window().maximize();
  });

  after(async () => {
    await driver.quit();
  });

  it('Test 1: Check ChromeDriver website', async () => {
    await driver.get('https://chromedriver.chromium.org/home');
    
    // Проверка текста основного тайтла "ChromeDriver"
    const mainTitle = await driver.findElement(By.css('span.Rn3Z1b'));
    expect(await mainTitle.getText()).to.equal('ChromeDriver');
        
    // Клик на пункт "Chrome Extensions"
    const extensionsLink = await driver.wait(until.elementLocated(By.xpath('//nav[@class="plFg0c"]/ul/li[3]')),
      10000);
    await extensionsLink.click();  

    // Хайлайт нового основного тайтла
    const newMainTitle = await driver.findElement(By.css('span.Rn3Z1b'));
    await driver.executeScript("arguments[0].style.backgroundColor = 'yellow'", newMainTitle);

    // Проверка, что новый тайтл стал "Chrome Extensions"
    expect(await newMainTitle.getText()).to.equal('Chrome Extensions');
  });


  it('Test 2: Search for "driver"', async () => {
    await driver.get('https://chromedriver.chromium.org/home');
    
    // Клик на иконку поиска для перехода на страницу поиска
    const searchIcon = await driver.findElement(By.css('svg.vu8Pwe.tCHXDc.YSH9J'));
    await searchIcon.click();
    
    // Ввод "driver" в поле поиска
    const searchInput = await driver.findElement(By.css('div.zKHdkd div.Xb9hP input'));
    await searchInput.sendKeys('driver');
    
    // Нажатие Enter для запуска поиска
    await searchInput.sendKeys('\n');

    // Проверка, что первая ссылка содержит слово "driver"
    const firstLink = await driver.wait(until.elementLocated(By.css('a[data-position="1"]')), 10000);
    const linkText = await firstLink.getText();
    expect(linkText.toLowerCase()).to.include('driver');

  });
});
