import { expect, test } from '@playwright/test';

test.describe('fast-codelabs-home', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should contain a div element', async ({ page }) => {
    const element = page.locator('fast-codelabs-home > div');

    await expect(element).not.toBeNull();
  });
});
