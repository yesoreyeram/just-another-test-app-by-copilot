import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Breadcrumbs } from './breadcrumbs'

describe('Breadcrumbs', () => {
  it('renders breadcrumb items', () => {
    const items = [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'Details' },
    ]
    render(
      <BrowserRouter>
        <Breadcrumbs items={items} />
      </BrowserRouter>
    )
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Products')).toBeInTheDocument()
    expect(screen.getByText('Details')).toBeInTheDocument()
  })

  it('renders links with href', () => {
    const items = [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
    ]
    render(
      <BrowserRouter>
        <Breadcrumbs items={items} />
      </BrowserRouter>
    )
    const homeLink = screen.getByText('Home') as HTMLAnchorElement
    expect(homeLink.href).toContain('/')
  })

  it('marks last item as current page', () => {
    const items = [
      { label: 'Home', href: '/' },
      { label: 'Current' },
    ]
    render(
      <BrowserRouter>
        <Breadcrumbs items={items} />
      </BrowserRouter>
    )
    const currentItem = screen.getByText('Current')
    expect(currentItem).toHaveAttribute('aria-current', 'page')
  })

  it('renders custom separator', () => {
    const items = [
      { label: 'Home', href: '/' },
      { label: 'Products' },
    ]
    render(
      <BrowserRouter>
        <Breadcrumbs items={items} separator={<span>/</span>} />
      </BrowserRouter>
    )
    expect(screen.getByText('/')).toBeInTheDocument()
  })
})
