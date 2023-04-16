import { expect, test } from '@playwright/test';

test.describe('index page', () => {
    test('has title', async ({ page }) => {
        await page.goto('http://localhost:4173/');

        await expect(page).toHaveTitle(/Startseite - popCHORköln/);
    });
});
