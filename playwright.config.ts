import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config({
  path: `.env.${process.env.ENV || 'qa'}`
});

export default defineConfig({

  testDir: './tests',

  timeout: 60000,

  retries: 0,

  workers: process.env.CI ? 4 : 2,
  expect:{
    timeout: 40*1000,

  },

  reporter: [
    ['html'],
    ['allure-playwright']
  ],

  use: {

    baseURL: process.env.BASE_URL,
  
    headless: process.env.CI ? true : false,
  
    viewport: null,
  
    ignoreHTTPSErrors: true,
  
    actionTimeout: 15000,
  
    navigationTimeout: 30000,
  
    screenshot: 'only-on-failure',
  
    video: 'retain-on-failure',
  
    trace: 'retain-on-failure'
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] }
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] }
    }
  ]
});