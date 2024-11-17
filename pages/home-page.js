const { clickElement } = require("../utils/element/elements");

export class HomePage {
  constructor(page) {
    this.page = page;
    this.getStarted = "//a[contains(text(),'Get started')]";
    this.pagetext =
      "Fast and reliable end-to-end testing for modern web apps | Playwright";
    this.introTitle = "Installation | Playwright";
    this.nodeJsButton = "//a[@role='button' and contains(text(),'Node.js')]";
    this.javeText = "//li/a[contains(text(),'Java')]";
  }

  async clickGetStarted(element) {
    if (!element) {
      element = this.getStarted;
    } else element = element;
    await clickElement(this.page, element);
  }
}
