import { expect, test } from '@playwright/test';

test.describe('/tickets', () => {
    test('redirects to homepage', async ({ page }) => {
        await page.goto('/');

        await page.goto('/tickets');

        await expect(page).toHaveURL('/');
    });
});
