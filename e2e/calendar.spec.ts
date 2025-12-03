import { test, expect } from '@playwright/test';

test.describe('Calendar Plugin', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('should load the calendar with default week view', async ({ page }) => {
        // Check for "Week view" text which indicates the current view.
        await expect(page.getByText('Week view')).toBeVisible();

        // Check for days of the week
        await expect(page.getByText('Mon', { exact: true })).toBeVisible();
        await expect(page.getByText('Sun', { exact: true })).toBeVisible();

        // Check for week specific element (e.g., time labels like "12 AM")
        await expect(page.getByText('12 AM')).toBeVisible();
    });

    test('should switch views', async ({ page }) => {
        // Open view switcher
        await page.getByText('Week view').click();

        // Select Month view
        await page.getByRole('button', { name: 'month view' }).click();

        // Check if view changed
        await expect(page.getByText('Month view')).toBeVisible();

        // Check for month specific element (e.g., grid cells)
        // We can check that time labels are NOT visible
        await expect(page.getByText('12 AM')).not.toBeVisible();
    });

    test('should navigate dates', async ({ page }) => {
        // Get current month text
        const header = page.locator('main h1');
        const initialText = await header.textContent();

        // Click next button
        await page.getByLabel('Next period').click();

        // Wait for text to change
        await expect(header).not.toHaveText(initialText || '');
    });

    test('should open create event drawer', async ({ page }) => {
        // Open drawer using the Create event button
        await page.getByLabel('Create event').click();

        // Check if drawer opened
        await expect(page.getByRole('heading', { name: 'Create event' })).toBeVisible({ timeout: 10000 });

        // Fill form
        await page.getByPlaceholder('Add title').fill('E2E Test Event');

        // Save
        // Scope to the dialog to avoid conflict with the header button
        const dialog = page.getByRole('dialog');
        await dialog.getByRole('button', { name: 'Create event' }).click();

        // Drawer should close
        await expect(page.getByRole('heading', { name: 'Create event' })).not.toBeVisible();
    });
});
