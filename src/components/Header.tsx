import { Moon, Sun, Palette } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '@/contexts/ThemeContext'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Switch } from '@/components/ui/switch'
import { Breadcrumbs, type BreadcrumbItem } from '@/components/ui/breadcrumbs'

type Theme = 'sky' | 'sea' | 'forest' | 'gold' | 'pink' | 'chocolate' | 'halloween' | 'diwali' | 'valentine'

const themes = [
  { value: 'sky', label: 'Sky' },
  { value: 'sea', label: 'Sea' },
  { value: 'forest', label: 'Forest' },
  { value: 'gold', label: 'Gold' },
  { value: 'pink', label: 'Pink' },
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'halloween', label: 'Halloween' },
  { value: 'diwali', label: 'Diwali' },
  { value: 'valentine', label: "Valentine's Day" },
] as const

export function Header() {
  const { theme, mode, setTheme, toggleMode } = useTheme()
  const location = useLocation()

  // Generate breadcrumbs based on current path
  const getBreadcrumbs = (): BreadcrumbItem[] => {
    const path = location.pathname
    const breadcrumbs: BreadcrumbItem[] = []

    if (path.startsWith('/design')) {
      breadcrumbs.push({ label: 'Design', href: '/design' })

      const pathParts = path.split('/').filter(Boolean)
      if (pathParts.length > 1) {
        const section = pathParts[1]
        const pageName = pathParts[2]

        if (section === 'tokens') {
          breadcrumbs.push({ label: 'Design Tokens', href: '/design' })
          if (pageName) {
            const pageTitle = pageName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
            breadcrumbs.push({ label: pageTitle })
          }
        } else if (section === 'components') {
          breadcrumbs.push({ label: 'Components', href: '/design/components' })
          if (pageName) {
            const pageTitle = pageName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
            breadcrumbs.push({ label: pageTitle })
          }
        } else if (section === 'layout') {
          breadcrumbs.push({ label: 'Layout', href: '/design' })
          if (pageName) {
            const pageTitle = pageName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
            breadcrumbs.push({ label: pageTitle })
          }
        }
      }
    }

    return breadcrumbs
  }

  const breadcrumbs = getBreadcrumbs()
  const showBreadcrumbs = location.pathname.startsWith('/design') && breadcrumbs.length > 1

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <Link to="/" className="text-xl font-bold hover:opacity-80 transition-opacity">
            Hello
          </Link>
          {!showBreadcrumbs && (
            <nav className="flex items-center gap-2">
              <Link to="/design">
                <Button variant="ghost" size="sm">
                  Design
                </Button>
              </Link>
            </nav>
          )}
          {showBreadcrumbs && (
            <Breadcrumbs items={breadcrumbs} />
          )}
        </div>
        
        <div className="flex items-center gap-4">
          {/* Dark/Light Mode Switch */}
          <div className="flex items-center gap-2">
            <Sun className="h-4 w-4" />
            <Switch
              checked={mode === 'dark'}
              onCheckedChange={toggleMode}
              aria-label="Toggle dark mode"
            />
            <Moon className="h-4 w-4" />
          </div>

          {/* Theme Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Select theme">
                <Palette className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Select Theme</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup value={theme} onValueChange={(value) => setTheme(value as Theme)}>
                {themes.map((t) => (
                  <DropdownMenuRadioItem key={t.value} value={t.value}>
                    {t.label}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
