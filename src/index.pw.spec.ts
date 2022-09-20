import { expect, test } from "@playwright/test";

test.describe("page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should contain fast-codelabs-app", async ({ page }) => {
    const element = page.locator("fast-codelabs-app");
    await expect(element).not.toBeNull();
  });
});
