import { Link, useLocation } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { designNavigation, type NavigationItem } from '@/lib/design-navigation'
import { cn } from '@/lib/utils'
import { ScrollArea } from '@/components/ui/scroll-area'

interface SidebarItemProps {
  item: NavigationItem
  level?: number
}

function SidebarItem({ item, level = 0 }: SidebarItemProps) {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(true)
  const hasChildren = item.children && item.children.length > 0
  const isActive = item.path === location.pathname

  if (hasChildren) {
    return (
      <div className="mb-1">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            'w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md transition-colors',
            'hover:bg-accent hover:text-accent-foreground',
            level === 0 ? 'text-foreground' : 'text-muted-foreground'
          )}
          style={{ paddingLeft: `${(level + 1) * 12}px` }}
        >
          <span>{item.title}</span>
          <ChevronDown
            className={cn('h-4 w-4 transition-transform', isOpen && 'transform rotate-180')}
          />
        </button>
        {isOpen && item.children && (
          <div className="mt-1">
            {item.children.map((child, index) => (
              <SidebarItem key={index} item={child} level={level + 1} />
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <Link
      to={item.path || '#'}
      className={cn(
        'block px-3 py-2 text-sm rounded-md transition-colors mb-1',
        isActive
          ? 'bg-primary text-primary-foreground font-medium'
          : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
      )}
      style={{ paddingLeft: `${(level + 1) * 12}px` }}
    >
      {item.title}
    </Link>
  )
}

export function DesignSidebar() {
  return (
    <aside className="w-64 border-r bg-background h-full flex flex-col">
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold">Design System</h2>
      </div>
      <ScrollArea className="flex-1">
        <div className="p-4">
          <nav>
            {designNavigation.map((item, index) => (
              <SidebarItem key={index} item={item} />
            ))}
          </nav>
        </div>
      </ScrollArea>
    </aside>
  )
}
