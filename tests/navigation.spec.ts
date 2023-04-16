import { expect, test } from '@playwright/test';

test.describe('navigation overlay', () => {
    test('can be opened and closed with buttons', async ({ page }) => {
        await page.goto('http://localhost:4173/');

        await page.getByRole('button', { name: 'Menü öffnen' }).click();
        await expect(page.locator('nav')).toBeVisible();
        await page.getByRole('button', { name: 'Menü schließen' }).click();
        await expect(page.locator('nav')).not.toBeVisible();
    });

    const navigationItems = [
        { name: 'Chor', id: 'chor' },
        { name: 'Chorleiter', id: 'chorleiter' },
        { name: 'Termine', id: 'termine' },
        { name: 'Kontakt', id: 'kontakt' },
    ];

    for (const { name, id } of navigationItems) {
        test(`jumps to #${id} and closes nav on click to ${name}`, async ({ page }) => {
            await page.goto('http://localhost:4173/');

            await page.getByRole('button', { name: 'Menü öffnen' }).click();
            await page.getByRole('link', { name }).click();
            await expect(page).toHaveURL(new RegExp('/#' + id + '$'));

            await expect(page.locator(`#${id}`)).toBeVisible();
            await expect(page.locator('nav')).not.toBeVisible();
        });
    }
});
