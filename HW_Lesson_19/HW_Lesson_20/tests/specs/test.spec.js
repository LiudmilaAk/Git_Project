const assert = require('chai').assert;
const HomePage = require('./pageObjects/homePage');
const DocsPage = require('./pageObjects/docsPage');

describe("WebdriverIO website", function () {
  it("main page has the right title", async function () {
    await HomePage.open();
    const title = await HomePage.getTitle();
    assert.equal(
      title,
      "WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO"
    );
  });

  it("WebdriverIO logo is displayed", async function () {
    await HomePage.open();
    assert.isTrue(await HomePage.isLogoDisplayed());
  });

  it("should have a search box", async function () {
    await HomePage.open();
    assert.isTrue(await HomePage.isSearchBoxDisplayed());
  });

  it("should navigate to the documentation page", async function () {
    await HomePage.open();
    await HomePage.goToDocsPage();
    await DocsPage.waitForTitleContains("Getting Started");
    const title = await DocsPage.getTitle();
    assert.include(title, "Getting Started");
  });

  it("should navigate to API page", async function () {
    await HomePage.open();
    await HomePage.goToAPIPage();
    await DocsPage.waitForTitleContains("Introduction");
    const title = await DocsPage.getTitle();
    assert.include(title, "Introduction");
  });
});
