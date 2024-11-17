const { expect } = require("@playwright/test");

async function clickElement(page, selector) {
  await page.waitForSelector(selector);
  await page.click(selector);
}

async function hoverElement(page, selector) {
  await page.waitForSelector(selector);
  await page.hover(selector);
}

async function textNotVisiable(page, txt) {
  await expect(page.getByText(txt)).not.toBeVisible();
}

async function textVisiable(page, txt) {
  await expect(page.getByText(txt)).toBeVisible();
}

module.exports = {
  clickElement,
  hoverElement,
  textNotVisiable,
  textVisiable,
};
