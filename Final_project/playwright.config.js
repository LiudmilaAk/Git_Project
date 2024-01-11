const { testPlanFilter } = require("allure-playwright/dist/testplan");
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',

  timeout: 1200 * 1000,
  expect: {
    timeout: 1200000
  },

  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  // Use Allure Playwright's testPlanFilter() to determine the grep parameter
  grep: testPlanFilter(),

  // Add Allure Playwright as a reporter
  reporter: [["line"], ["allure-playwright"]],

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
