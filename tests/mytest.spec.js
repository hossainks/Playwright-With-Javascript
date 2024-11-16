const { test, expect } = require("@playwright/test");

// Test the first test case
test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("First Test", async function ({ page }) {
  await expect(page).toHaveTitle(
    /Fast and reliable end-to-end testing for modern web apps | Playwright/
  );
});

// Test the second test case
test("Second Test", async function ({ page }) {
  await page.getByRole("link", { name: "Get started" }).click();
  await expect(page).toHaveTitle(/Installation | Playwright/);
});

// Test the third test case
test("Check Java page", async function ({ page }) {
  await page.getByRole("button", { name: "Node.js" }).hover();
  await page.getByText("Java", { exact: true }).nth(0).click();
  await page.waitForLoadState("networkidle");
  // expect(page.url()).toContain("java");
  await expect(page).toHaveURL("https://playwright.dev/java/");
  await expect(page.getByAltText("Installing Playwright")).not.toBeVisible();
  const javaDescription =
    "Browser contexts. Playwright creates a browser context for each test. Browser context is equivalent to a brand new browser profile. This delivers full test isolation with zero overhead. Creating a new browser context only takes a handful of milliseconds.";
  expect(page.getByText(javaDescription)).toBeVisible();
});
