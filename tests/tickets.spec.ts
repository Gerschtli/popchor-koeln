import { expect, test } from '@playwright/test';

test.describe('/tickets', () => {
    test('redirects to eventbrite', async ({ page }) => {
        await page.goto('/');

        const navigationPromise = page.waitForNavigation({
            url: /^https:\/\/www.eventbrite.com/,
        });

        await page.goto('/tickets');

        await navigationPromise;

        await expect(page).toHaveURL(
            'https://www.eventbrite.com/e/popchorkoln-soundescape-open-air-doppelkonzert-tickets-620148610187',
        );
    });
});
