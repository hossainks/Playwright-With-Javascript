const { test, expect, Page } = require("@playwright/test");
const { HomePage } = require("../pages/home-page");
const { JavaPage } = require("../pages/java");
const {
  clickElement,
  hoverElement,
  textVisiable,
  textNotVisiable,
} = require("../utils/element/elements");
const { compareTitle, compareUrl } = require("../utils/element/compare");

let homePage;
let javaPage;

// Test the first test case
test.beforeEach(async ({ page }) => {
  await page.goto("/");
  homePage = new HomePage(page);
  javaPage = new JavaPage(page);
});

test.describe("Home Page", () => {
  test("First Test", async function ({ page }) {
    await compareTitle(page, homePage.pagetext);
  });

  // Test the second test case
  test("Second Test", async function ({ page }) {
    await homePage.clickGetStarted();
    await compareTitle(page, homePage.introTitle);
  });

  // Test the third test case
  test("Check Java page", { tag: "@smoke" }, async function ({ page }) {
    await hoverElement(page, homePage.nodeJsButton);
    await clickElement(page, homePage.javeText);
    await page.waitForLoadState("networkidle");
    // expect(page.url()).toContain("java");
    await compareUrl(page, javaPage.javsPageUrl);
    await textNotVisiable(page, homePage.introTitle);
    await textVisiable(page, javaPage.javaDescription);
  });
});

/* // Test the fourth test case
test("Check username and password inputs", async function ({ page }) {
  const usernameInput = page.getByPlaceholder("username");
  const passwordInput = page.getByPlaceholder("password");
  await expect(usernameInput).toBeVisible();
  await expect(passwordInput).toBeVisible();
});
 */
