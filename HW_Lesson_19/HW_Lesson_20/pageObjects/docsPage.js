class DocsPage {
  waitForTitleContains(text) {
    return browser.waitUntil(
      async () => (await browser.getTitle()).includes(text),
      {
        timeout: 5000,
        timeoutMsg: `Expected title to contain ${text}`,
      }
    );
  }

  getTitle() {
    return browser.getTitle();
  }
}

module.exports = new DocsPage();
  