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

type AccentColor = 'tomato' | 'red' | 'ruby' | 'crimson' | 'pink' | 'plum' | 'purple' | 'violet' | 'iris' | 'indigo' | 'blue' | 'cyan' | 'teal' | 'jade' | 'green' | 'grass' | 'brown' | 'orange' | 'sky' | 'mint' | 'lime' | 'yellow' | 'amber' | 'gold' | 'bronze' | 'gray'

const accentColors = [
  { value: 'tomato', label: 'Tomato' },
  { value: 'red', label: 'Red' },
  { value: 'ruby', label: 'Ruby' },
  { value: 'crimson', label: 'Crimson' },
  { value: 'pink', label: 'Pink' },
  { value: 'plum', label: 'Plum' },
  { value: 'purple', label: 'Purple' },
  { value: 'violet', label: 'Violet' },
  { value: 'iris', label: 'Iris' },
  { value: 'indigo', label: 'Indigo' },
  { value: 'blue', label: 'Blue' },
  { value: 'cyan', label: 'Cyan' },
  { value: 'teal', label: 'Teal' },
  { value: 'jade', label: 'Jade' },
  { value: 'green', label: 'Green' },
  { value: 'grass', label: 'Grass' },
  { value: 'brown', label: 'Brown' },
  { value: 'orange', label: 'Orange' },
  { value: 'sky', label: 'Sky' },
  { value: 'mint', label: 'Mint' },
  { value: 'lime', label: 'Lime' },
  { value: 'yellow', label: 'Yellow' },
  { value: 'amber', label: 'Amber' },
  { value: 'gold', label: 'Gold' },
  { value: 'bronze', label: 'Bronze' },
  { value: 'gray', label: 'Gray' },
] as const

export function Header() {
  const { appearance, accentColor, setAccentColor, toggleAppearance } = useTheme()
  const location = useLocation()

  // Determine the current effective appearance
  const effectiveAppearance = appearance === 'inherit'
    ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    : appearance

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
              checked={effectiveAppearance === 'dark'}
              onCheckedChange={toggleAppearance}
              aria-label="Toggle dark mode"
            />
            <Moon className="h-4 w-4" />
          </div>

          {/* Accent Color Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Select accent color">
                <Palette className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Accent Color</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup value={accentColor} onValueChange={(value) => setAccentColor(value as AccentColor)}>
                {accentColors.map((color) => (
                  <DropdownMenuRadioItem key={color.value} value={color.value}>
                    {color.label}
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
