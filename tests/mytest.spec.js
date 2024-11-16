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
test("Third Test", async function ({ page }) {
  await page.getByRole("button", { name: "Node.js" }).hover();
  await page.getByText("Java").nth(0).click();
});
