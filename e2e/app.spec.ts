import { test, expect } from '@playwright/test'

test.describe('Hello World App', () => {
  test('has correct title and content', async ({ page }) => {
    await page.goto('/')

    // Check for Hello World text
    await expect(page.getByRole('heading', { name: 'Hello World' })).toBeVisible()
    
    // Check for Explore more button
    await expect(page.getByRole('button', { name: /explore more/i })).toBeVisible()
    
    // Check for header with Hello title
    await expect(page.getByRole('heading', { name: 'Hello' })).toBeVisible()
  })

  test('theme switching works', async ({ page }) => {
    await page.goto('/')

    // Click the theme selector button
    await page.getByRole('button', { name: /select theme/i }).click()
    
    // Select a theme (e.g., Sea)
    await page.getByRole('menuitemradio', { name: 'Sea' }).click()
    
    // Verify theme was applied (check for theme class)
    const html = page.locator('html')
    await expect(html).toHaveClass(/theme-sea/)
  })

  test('dark mode toggle works', async ({ page }) => {
    await page.goto('/')

    // Find and click the dark mode switch
    const darkModeSwitch = page.getByRole('switch', { name: /toggle dark mode/i })
    await darkModeSwitch.click()
    
    // Verify dark mode was applied
    const html = page.locator('html')
    await expect(html).toHaveClass(/dark/)
  })
})
