import { Moon, Sun, Palette } from 'lucide-react'
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

type Theme = 'sky' | 'sea' | 'forest' | 'gold' | 'pink' | 'chocolate'

const themes = [
  { value: 'sky', label: 'Sky' },
  { value: 'sea', label: 'Sea' },
  { value: 'forest', label: 'Forest' },
  { value: 'gold', label: 'Gold' },
  { value: 'pink', label: 'Pink' },
  { value: 'chocolate', label: 'Chocolate' },
] as const

export function Header() {
  const { theme, mode, setTheme, toggleMode } = useTheme()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-bold">Hello</h1>
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
