const { test, expect } = require("@playwright/test");
const {
  clickElement,
  hoverElement,
  textVisiable,
  textNotVisiable,
} = require("../utils/element/elements");
const { compareTitle, compareUrl } = require("../utils/element/compare");

// Test the first test case
test.beforeEach(async ({ page }) => {
  await page.goto("/");
  await page.waitForLoadState("networkidle");
});

test("First Test", async function ({ page }) {
  const text =
    "Fast and reliable end-to-end testing for modern web apps | Playwright";
  await compareTitle(page, text);
});

// Test the second test case
test("Second Test", async function ({ page }) {
  const element = "//a[contains(text(),'Get started')]";
  await clickElement(page, element);
  const text1 = "Installation | Playwright";
  await compareTitle(page, text1);
});

// Test the third test case
test.only("Check Java page", async function ({ page }) {
  const element = "//a[@role='button' and contains(text(),'Node.js')]";
  const javeElement = "//li/a[contains(text(),'Java')]";

  await hoverElement(page, element);
  await clickElement(page, javeElement);
  await page.waitForLoadState("networkidle");
  // expect(page.url()).toContain("java");
  await compareUrl(page, "https://playwright.dev/java/");
  await textNotVisiable(page, "Installing Playwright");
  const javaDescription =
    "Browser contexts. Playwright creates a browser context for each test. Browser context is equivalent to a brand new browser profile. This delivers full test isolation with zero overhead. Creating a new browser context only takes a handful of milliseconds.";
  await textVisiable(page, javaDescription);
});

/* // Test the fourth test case
test("Check username and password inputs", async function ({ page }) {
  const usernameInput = page.getByPlaceholder("username");
  const passwordInput = page.getByPlaceholder("password");
  await expect(usernameInput).toBeVisible();
  await expect(passwordInput).toBeVisible();
});
 */
