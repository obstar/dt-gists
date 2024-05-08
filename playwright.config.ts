// noinspection JSUnusedGlobalSymbols
import { defineConfig } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';
import 'dotenv/config';
import { returnBooleanForHeadless } from 'utils/parse';

const testDir = defineBddConfig({
  paths: ['tests/**/*.feature'],
  require: ['tests/**/*.ts'],
  outputDir: 'tests/api/features/.features-gen',
});

export default defineConfig({
  testDir,
  reporter: [
    [
      'allure-playwright',
      {
        detail: true,
        outputFolder: 'tests/.reports/api-tests/allure-results',
        suiteTitle: true,
        categories: [
          {
            name: 'Outdated tests',
            messageRegex: '.*FileNotFound.*',
          },
        ],
        environmentInfo: {
          framework: 'playwright',
        },
      },
    ],
    ['list'],
    ['html', { outputFolder: 'tests/.reports/playwright-html-report' }],
    ['junit', { outputFile: 'tests/.reports/junit/results.xml' }],
  ],
  /* Maximum time one test can run for. */
  timeout: 30 * 1000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 5000,
  },
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: Boolean(process.env.CI),
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    actionTimeout: 0,
    headless: returnBooleanForHeadless(process.env.HEADLESS as string),
    trace: 'on-first-retry',
  },

  /* Configure projects for different apps */
  projects: [
    {
      name: 'api-tests',
      outputDir: 'tests/.reports/api-tests/test-results',
    },
  ],
});
