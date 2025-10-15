import { test, expect } from '@playwright/test'

test.describe('Hello World App', () => {
  test('has correct title and content', async ({ page }) => {
    await page.goto('/')

    // Check for Hello World text
    await expect(page.getByRole('heading', { name: 'Hello World' })).toBeVisible()
    
    // Check for Explore more button
    await expect(page.getByRole('button', { name: /explore more/i })).toBeVisible()
    
    // Check for header with Hello link
    await expect(page.getByRole('link', { name: 'Hello' })).toBeVisible()
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

  test('new themes are available', async ({ page }) => {
    await page.goto('/')

    // Click the theme selector button
    await page.getByRole('button', { name: /select theme/i }).click()
    
    // Verify new themes are in the list
    await expect(page.getByRole('menuitemradio', { name: 'Halloween' })).toBeVisible()
    await expect(page.getByRole('menuitemradio', { name: 'Diwali' })).toBeVisible()
    await expect(page.getByRole('menuitemradio', { name: "Valentine's Day" })).toBeVisible()
  })

  test('halloween theme switching works', async ({ page }) => {
    await page.goto('/')

    // Click the theme selector button
    await page.getByRole('button', { name: /select theme/i }).click()
    
    // Select Halloween theme
    await page.getByRole('menuitemradio', { name: 'Halloween' }).click()
    
    // Verify theme was applied (check for theme class)
    const html = page.locator('html')
    await expect(html).toHaveClass(/theme-halloween/)
  })

  test('diwali theme switching works', async ({ page }) => {
    await page.goto('/')

    // Click the theme selector button
    await page.getByRole('button', { name: /select theme/i }).click()
    
    // Select Diwali theme
    await page.getByRole('menuitemradio', { name: 'Diwali' }).click()
    
    // Verify theme was applied (check for theme class)
    const html = page.locator('html')
    await expect(html).toHaveClass(/theme-diwali/)
  })

  test('valentine theme switching works', async ({ page }) => {
    await page.goto('/')

    // Click the theme selector button
    await page.getByRole('button', { name: /select theme/i }).click()
    
    // Select Valentine's Day theme
    await page.getByRole('menuitemradio', { name: "Valentine's Day" }).click()
    
    // Verify theme was applied (check for theme class)
    const html = page.locator('html')
    await expect(html).toHaveClass(/theme-valentine/)
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

  test('navigates to design system page', async ({ page }) => {
    await page.goto('/')

    // Click the Design link
    await page.getByRole('button', { name: /^design$/i }).click()
    
    // Verify we're on the design page
    await expect(page.getByRole('heading', { name: 'Design System', level: 1 })).toBeVisible()
    await expect(page.getByText('A comprehensive guide to the design tokens')).toBeVisible()
  })

  test('navigates back to home from design page', async ({ page }) => {
    await page.goto('/design')

    // Click the Hello link to go back home
    await page.getByRole('link', { name: 'Hello' }).click()
    
    // Verify we're back on home page
    await expect(page.getByRole('heading', { name: 'Hello World' })).toBeVisible()
  })

  test('design system page shows all sections', async ({ page }) => {
    await page.goto('/design')

    // Check for main sections
    await expect(page.getByRole('heading', { name: 'Colors', level: 2 })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Typography', level: 2 })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Spacing', level: 2 })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Border Radius', level: 2 })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Shadows', level: 2 })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Components', level: 2 })).toBeVisible()
  })
})
