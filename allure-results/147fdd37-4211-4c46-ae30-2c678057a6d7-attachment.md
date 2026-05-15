# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> Login Test
- Location: tests/login.spec.ts:4:5

# Error details

```
Error: page.goto: A server with the specified hostname could not be found.
Call log:
  - navigating to "https://qa.example.com/login", waiting until "load"

```

# Test source

```ts
  1  | import { test } from '@playwright/test';
  2  | import { LoginPage } from '../pages/LoginPage';
  3  | 
  4  | test('Login Test', async ({ page }) => {
  5  | 
  6  |   const loginPage = new LoginPage(page);
  7  | 
> 8  |   await page.goto('/login');
     |              ^ Error: page.goto: A server with the specified hostname could not be found.
  9  | 
  10 |   await loginPage.login(
  11 |     process.env.USERNAME!,
  12 |     process.env.PASSWORD!
  13 |   );
  14 | });
```