import { expect, test } from '@playwright/test';

test.describe('navigation overlay', () => {
    test('can be opened and closed with buttons', async ({ page }) => {
        await page.goto('/');

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
            await page.goto('/');

            await page.getByRole('button', { name: 'Menü öffnen' }).click();
            await page.getByRole('link', { name }).click();
            await expect(page).toHaveURL(new RegExp('/#' + id + '$'));

            await expect(page.locator(`#${id}`)).toBeVisible();
            await expect(page.locator('nav')).not.toBeVisible();
        });
    }

    test(`jumps to index page and closes nav on click to nav item when on different page`, async ({ page }) => {
        await page.goto('/impressum');

        await page.getByRole('button', { name: 'Menü öffnen' }).click();
        await page.getByRole('link', { name: 'Chor' }).click();
        await expect(page).toHaveURL('/#chor');

        await expect(page.locator('nav')).not.toBeVisible();
    });

    test(`closes navigation on escape key`, async ({ page }) => {
        await page.goto('/');

        await page.getByRole('button', { name: 'Menü öffnen' }).click();
        await page.keyboard.press('Escape');

        await expect(page.locator('nav')).not.toBeVisible();
    });

    test(`closes navigation on history back`, async ({ page }) => {
        await page.goto('/');

        await page.getByRole('button', { name: 'Menü öffnen' }).click();
        await page.goBack();

        await expect(page).toHaveURL('/');
        await expect(page.locator('nav')).not.toBeVisible();
    });
});
