// @ts-check
const { defineConfig, devices } = require("@playwright/test");
const path = require("path");
const baseUrlEnv = require("./utils/environmentbasedurls");

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
require("dotenv").config({ path: path.resolve(__dirname, ".env") });

// console.log(path.resolve(__dirname, ".check"));
/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: "./tests",
  /* Run tests in files in pa  g : :rallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  //forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: "html",
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    baseURL: baseUrlEnv.staging.home, // reading the URL from

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on-first-retry",
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "ci",
      use: {
        baseURL: process.env.CI
          ? baseUrlEnv.production.app + process.env.GITHUB_REF_NAME
          : baseUrlEnv.staging.home,
      },
    },
    /*     {
      name: "ci",
      use: {
        baseURL: process.env.CI
          ? baseUrlEnv.production.app + process.env.GITHUB_REF_NAME
          : baseUrlEnv.staging.home,
      },
    }, */

    {
      name: "all-browsers-and-tests",
      use: {
        baseURL: baseUrlEnv.staging.home,
        ...devices["Desktop Chrome"],
      },
    },

    // {
    //   name: "all-browsers-and-tests",
    //   use: {
    //     baseURL: baseUrlEnv.staging.home,
    //     ...devices["Desktop Safari"],
    //   },
    // },

    {
      name: "all-browsers-and-tests",
      use: {
        baseURL: baseUrlEnv.staging.home,
        ...devices["Desktop Firefox"],
      },
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },

    /*   {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },  */

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
