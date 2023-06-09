import { expect, test } from '@playwright/test';

test.describe('index page', () => {
    test('has title', async ({ page }) => {
        await page.goto('/');

        await expect(page).toHaveTitle(/Startseite - popCHORköln/);
    });

    test('text expands on click', async ({ page }) => {
        await page.goto('/');

        const locatorButton = page.getByRole('button', { name: /mehr lesen/ });
        const locatorText = page.getByText(/Die Idee, einen Chor zu gründen/);

        await expect(locatorText).not.toBeVisible();

        await locatorButton.click();

        await expect(locatorText).toBeVisible();
        await expect(locatorButton).not.toBeVisible();
    });

    test('gigs can be expanded and collapsed', async ({ page }) => {
        await page.goto('/');

        const locatorButton = page.getByRole('button', { name: /10 - Das Jubiläumskonzert!/ });
        const locatorText = page.getByText(/Save the date/);

        await expect(locatorText).not.toBeVisible();

        await locatorButton.click();

        await expect(locatorText).toBeVisible();

        await locatorButton.click();

        await expect(locatorText).not.toBeVisible();
    });
});
