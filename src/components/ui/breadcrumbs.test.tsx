import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Breadcrumbs } from './breadcrumbs'

describe('Breadcrumbs', () => {
  it('renders breadcrumb items', () => {
    const items = [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'Details' },
    ]
    render(<Breadcrumbs items={items} />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Products')).toBeInTheDocument()
    expect(screen.getByText('Details')).toBeInTheDocument()
  })

  it('renders links with href', () => {
    const items = [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
    ]
    render(<Breadcrumbs items={items} />)
    const homeLink = screen.getByText('Home') as HTMLAnchorElement
    expect(homeLink.href).toContain('/')
  })

  it('marks last item as current page', () => {
    const items = [
      { label: 'Home', href: '/' },
      { label: 'Current' },
    ]
    render(<Breadcrumbs items={items} />)
    const currentItem = screen.getByText('Current')
    expect(currentItem).toHaveAttribute('aria-current', 'page')
  })

  it('renders custom separator', () => {
    const items = [
      { label: 'Home', href: '/' },
      { label: 'Products' },
    ]
    render(<Breadcrumbs items={items} separator={<span>/</span>} />)
    expect(screen.getByText('/')).toBeInTheDocument()
  })
})
