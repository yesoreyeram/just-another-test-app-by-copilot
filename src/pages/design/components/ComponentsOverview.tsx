import { Link } from 'react-router-dom'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface ComponentInfo {
  name: string
  path: string
  description: string
}

const components: ComponentInfo[] = [
  { name: 'Accordion', path: '/design/components/accordion', description: 'A vertically stacked set of interactive headings.' },
  { name: 'Alert', path: '/design/components/alert', description: 'Displays a callout for user attention.' },
  { name: 'Aspect Ratio', path: '/design/components/aspect-ratio', description: 'Displays content within a desired ratio.' },
  { name: 'Avatar', path: '/design/components/avatar', description: 'An image element with a fallback.' },
  { name: 'Badge', path: '/design/components/badge', description: 'A small label or status indicator.' },
  { name: 'Breadcrumbs', path: '/design/components/breadcrumbs', description: 'Navigation that reveals location within a hierarchy.' },
  { name: 'Button', path: '/design/components/button', description: 'A clickable button element.' },
  { name: 'Card', path: '/design/components/card', description: 'A container for grouping related content.' },
  { name: 'Carousel', path: '/design/components/carousel', description: 'A slideshow component for cycling through elements.' },
  { name: 'Checkbox', path: '/design/components/checkbox', description: 'A control for toggling between checked and unchecked.' },
  { name: 'Collapsible', path: '/design/components/collapsible', description: 'An expandable and collapsible content section.' },
  { name: 'Color Picker', path: '/design/components/color-picker', description: 'An input for selecting colors.' },
  { name: 'Date Picker', path: '/design/components/date-picker', description: 'An input for selecting dates.' },
  { name: 'DateTime Picker', path: '/design/components/datetime-picker', description: 'An input for selecting date and time.' },
  { name: 'Dialog', path: '/design/components/dialog', description: 'A modal dialog that overlays the main content.' },
  { name: 'Drawer', path: '/design/components/drawer', description: 'A panel that slides in from the edge of the screen.' },
  { name: 'Hover Card', path: '/design/components/hover-card', description: 'A card that appears on hover.' },
  { name: 'Input', path: '/design/components/input', description: 'A text input field.' },
  { name: 'Label', path: '/design/components/label', description: 'A caption for a form element.' },
  { name: 'Multi-Select', path: '/design/components/multi-select', description: 'A dropdown for selecting multiple options.' },
  { name: 'Multi-Step Range Slider', path: '/design/components/multi-step-range-slider', description: 'A slider with multiple value points.' },
  { name: 'Progress', path: '/design/components/progress', description: 'Displays progress of a task.' },
  { name: 'Scroll Area', path: '/design/components/scroll-area', description: 'A container with custom scrollbars.' },
  { name: 'Section', path: '/design/components/section', description: 'A semantic section container.' },
  { name: 'Section Divider', path: '/design/components/section-divider', description: 'A visual separator between sections.' },
  { name: 'Select', path: '/design/components/select', description: 'A dropdown for selecting a single option.' },
  { name: 'Separator', path: '/design/components/separator', description: 'A visual divider.' },
  { name: 'Slider', path: '/design/components/slider', description: 'An input for selecting a value from a range.' },
  { name: 'Spinner', path: '/design/components/spinner', description: 'A loading indicator.' },
  { name: 'Switch', path: '/design/components/switch', description: 'A toggle switch.' },
  { name: 'Tabs', path: '/design/components/tabs', description: 'A tabbed interface for organizing content.' },
  { name: 'Tag', path: '/design/components/tag', description: 'A label for categorizing or organizing items.' },
  { name: 'Textarea', path: '/design/components/textarea', description: 'A multi-line text input.' },
  { name: 'Time Picker', path: '/design/components/time-picker', description: 'An input for selecting time.' },
  { name: 'Time Range Picker', path: '/design/components/time-range-picker', description: 'An input for selecting a time range.' },
  { name: 'Toast', path: '/design/components/toast', description: 'A brief notification message.' },
  { name: 'Tooltip', path: '/design/components/tooltip', description: 'A popup that displays information.' },
]

export function ComponentsOverview() {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Components</h1>
          <p className="text-lg text-muted-foreground">
            Explore our collection of reusable UI components built with React and Radix UI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {components.map((component) => (
            <Link key={component.path} to={component.path}>
              <Card className="h-full transition-colors hover:bg-accent cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-lg">{component.name}</CardTitle>
                  <CardDescription>{component.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
