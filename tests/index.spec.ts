import { expect, test } from '@playwright/test';

test.describe('index page', () => {
    test('has title', async ({ page }) => {
        await page.goto('/');
        await expect(page.getByTestId('js-loaded')).toHaveCount(1);

        await expect(page).toHaveTitle(/popCHORköln/);
    });

    test('text expands on click', async ({ page }) => {
        await page.goto('/');
        await expect(page.getByTestId('js-loaded')).toHaveCount(1);

        const locatorButton = page.getByRole('button', { name: /mehr lesen/ });
        const locatorText = page.getByText(/Die Idee, einen Chor zu gründen/);

        await expect(locatorText).toBeHidden();

        await locatorButton.click();

        await expect(locatorText).toBeVisible();
        await expect(locatorButton).toBeHidden();
    });

    // eslint-disable-next-line playwright/no-skipped-test
    test.skip('gigs can be expanded and collapsed', async ({ page }) => {
        await page.goto('/');
        await expect(page.getByTestId('js-loaded')).toHaveCount(1);

        const locatorButton = page.getByRole('button', { name: /ZEHN - Das Jubiläumskonzert!/ });
        const locatorText = page.getByText(/Der popCHORköln feiert Geburtstag/);

        await expect(locatorText).toBeHidden();

        await locatorButton.click();

        await expect(locatorText).toBeVisible();

        await locatorButton.click();

        await expect(locatorText).toBeHidden();
    });
});
