# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> Login Test
- Location: tests/login.spec.ts:4:5

# Error details

```
Error: page.goto: NS_ERROR_UNKNOWN_HOST
Call log:
  - navigating to "https://qa.example.com/login", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - heading [level=1] [ref=e5]
  - paragraph
  - paragraph
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
     |              ^ Error: page.goto: NS_ERROR_UNKNOWN_HOST
  9  | 
  10 |   await loginPage.login(
  11 |     process.env.USERNAME!,
  12 |     process.env.PASSWORD!
  13 |   );
  14 | });
```