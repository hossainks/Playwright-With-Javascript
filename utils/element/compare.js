const { expect } = require("@playwright/test");

async function compareTitle(page, text) {
  await expect(page).toHaveTitle(text);
}

async function compareUrl(page, url) {
  await expect(page).toHaveURL(url);
}

module.exports = { compareTitle, compareUrl };
