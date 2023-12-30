const { test, expect } = require("@playwright/test");
const BasePageClass = require("../pages/BasePage");
const Header = require("../pages/components/Header");
const Footer = require("../pages/components/Footer");

test.describe("Tests For Playwright Main Page components", () => {
  let basePageInstance, header, footer; 

  test.beforeEach(async ({ page }) => {
    basePageInstance = new BasePageClass(page);
    header = new Header(page);
    footer = new Footer(page);
    await basePageInstance.navigate("https://playwright.dev/");
  });

  test("Test ability to navigate to Docs page via Navigation menu", async ({ page }) => {
    await header.goToPageWithTopNavMenu(0);
    await expect(page.locator("h1")).toHaveText("Installation");
  });

  test("Test ability to navigate to API page via Navigation menu", async ({ page }) => {
    await header.goToPageWithTopNavMenu(1);
    await expect(page.locator("h1")).toHaveText("Playwright Library");
  });

  test("Test that Search gives relevant search results", async ({ page }) => {
    await header.searchInSearchField("Accessibility", 0);
    await expect(page.locator("h1")).toHaveText("Accessibility");
  });

  test("Test presence of Browsers image", async ({ page }) => {
    const image = page.locator('img[alt="Browsers (Chromium, Firefox, WebKit)"]');
    const imageCount = (await image.count()) > 0;
    expect(imageCount).toBeTruthy();
  });
 

  test("Test ability to navigate to Docs page via Footer link", async () => {
    await footer.goToPageWithDownNavMenu(0); 
    await expect(page.locator("h1")).toHaveText("Installation");
  });

  test("Test ability to switch between dark and light mode of pages", async ({ page }) => {
    await header.switchBetweenLightAndDarkMode();
    const locator = page.locator(".plugin-pages.plugin-id-default");
    await expect(locator).toHaveAttribute("data-theme", "light");
  });

});