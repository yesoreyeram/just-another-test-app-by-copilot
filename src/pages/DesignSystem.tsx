import { useState, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { Slider } from '@/components/ui/slider'
import { MultiStepRangeSlider } from '@/components/ui/multi-step-range-slider'
import { Badge } from '@/components/ui/badge'
import { Tag, Tags } from '@/components/ui/tag'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { MultiSelect } from '@/components/ui/multi-select'
import { Grid, Flex } from '@/components/ui/layout'
import { Spacer, Box } from '@/components/ui/spacing'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Avatar } from '@/components/ui/avatar'
import { ColorPicker } from '@/components/ui/color-picker'
import { DatePicker } from '@/components/ui/date-picker'
import { TimePicker } from '@/components/ui/time-picker'
import { DateTimePicker } from '@/components/ui/datetime-picker'
import { TimeRangePicker } from '@/components/ui/time-range-picker'
import type { TimeRange } from '@/components/ui/time-range-picker'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer'
import { toast } from '@/components/ui/use-toast'
import { ToastAction } from '@/components/ui/toast'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { designTokens } from '@/lib/design-tokens'

// Utility function to generate primary color variants from the current theme
function generatePrimaryColorVariants() {
  // Get the computed --primary CSS variable value
  const primaryHSL = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim()
  
  if (!primaryHSL) {
    return {}
  }
  
  // Parse HSL values (format: "hue saturation% lightness%")
  const [hue, saturation, lightness] = primaryHSL.split(' ').map(v => parseFloat(v))
  
  // Generate variants by adjusting lightness
  const variants: Record<string, string> = {
    50: `hsl(${hue}, ${saturation}%, 95%)`,
    100: `hsl(${hue}, ${saturation}%, 90%)`,
    200: `hsl(${hue}, ${saturation}%, 80%)`,
    300: `hsl(${hue}, ${saturation}%, 70%)`,
    400: `hsl(${hue}, ${saturation}%, 60%)`,
    500: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
    600: `hsl(${hue}, ${saturation}%, ${Math.max(lightness - 10, 10)}%)`,
    700: `hsl(${hue}, ${saturation}%, ${Math.max(lightness - 20, 10)}%)`,
    800: `hsl(${hue}, ${saturation}%, ${Math.max(lightness - 30, 5)}%)`,
    900: `hsl(${hue}, ${saturation}%, ${Math.max(lightness - 40, 5)}%)`,
    950: `hsl(${hue}, ${saturation}%, ${Math.max(lightness - 45, 3)}%)`,
    default: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
  }
  
  return variants
}

// Demo component for DatePicker with state
function DatePickerDemo() {
  const [date, setDate] = useState('')
  
  return (
    <div className="space-y-2">
      <Label htmlFor="date-picker">Pick a date</Label>
      <DatePicker id="date-picker" value={date} onChange={setDate} />
      {date && (
        <p className="text-sm text-muted-foreground">
          Selected date: <span className="font-mono font-semibold">{date}</span>
        </p>
      )}
    </div>
  )
}

// Demo component for TimePicker with state
function TimePickerDemo() {
  const [time, setTime] = useState('')
  
  return (
    <div className="space-y-2">
      <Label htmlFor="time-picker">Pick a time</Label>
      <TimePicker id="time-picker" value={time} onChange={setTime} />
      {time && (
        <p className="text-sm text-muted-foreground">
          Selected time: <span className="font-mono font-semibold">{time}</span>
        </p>
      )}
    </div>
  )
}

// Demo component for DateTimePickerDemo with state
function DateTimePickerDemo() {
  const [datetime, setDatetime] = useState('')
  
  return (
    <div className="space-y-2">
      <Label htmlFor="datetime-picker">Pick a date and time</Label>
      <DateTimePicker id="datetime-picker" value={datetime} onChange={setDatetime} />
      {datetime && (
        <p className="text-sm text-muted-foreground">
          Selected datetime: <span className="font-mono font-semibold">{datetime}</span>
        </p>
      )}
    </div>
  )
}

// Demo component for TimeRangePicker with state
function TimeRangePickerDemo() {
  const [range, setRange] = useState<TimeRange>({ from: '', to: '' })
  
  return (
    <div className="space-y-2">
      <Label>Pick a time range</Label>
      <TimeRangePicker value={range} onChange={setRange} />
      {(range.from || range.to) && (
        <p className="text-sm text-muted-foreground">
          Selected range: <span className="font-mono font-semibold">{range.from || '?'}</span> to <span className="font-mono font-semibold">{range.to || '?'}</span>
        </p>
      )}
    </div>
  )
}

// Demo component for ColorPicker with state
function ColorPickerDemo() {
  const [color, setColor] = useState('#3b82f6')
  
  return (
    <div className="space-y-2">
      <Label htmlFor="color-picker">Pick a color</Label>
      <ColorPicker id="color-picker" value={color} onChange={setColor} />
      <div className="flex items-center gap-2">
        <div 
          className="h-12 w-12 rounded-md border shadow-sm" 
          style={{ backgroundColor: color }}
        />
        <p className="text-sm text-muted-foreground">
          Selected color: <span className="font-mono font-semibold">{color}</span>
        </p>
      </div>
    </div>
  )
}

// Demo component for MultiSelect with state
function MultiSelectDemo() {
  const [selectedFrameworks, setSelectedFrameworks] = useState<string[]>([])
  
  const frameworkOptions = [
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
    { value: 'angular', label: 'Angular' },
    { value: 'svelte', label: 'Svelte' },
    { value: 'solid', label: 'Solid' },
    { value: 'qwik', label: 'Qwik' },
  ]

  return (
    <div className="space-y-2">
      <Label>Select Frameworks</Label>
      <MultiSelect
        options={frameworkOptions}
        selected={selectedFrameworks}
        onChange={setSelectedFrameworks}
        placeholder="Select frameworks..."
      />
      {selectedFrameworks.length > 0 && (
        <p className="text-sm text-muted-foreground">
          Selected: {selectedFrameworks.join(', ')}
        </p>
      )}
    </div>
  )
}

// Demo component for MultiStepRangeSlider with state
function MultiStepRangeSliderDemo() {
  const sizes = ['XS', 'S', 'M', 'L', 'XL']
  const [selectedSize, setSelectedSize] = useState<string>('M')
  const [selectedIndex, setSelectedIndex] = useState<number>(2)
  
  return (
    <div className="space-y-2">
      <Label>Select Size</Label>
      <MultiStepRangeSlider
        steps={sizes}
        defaultValue={[2]}
        onStepChange={(step, index) => {
          setSelectedSize(step)
          setSelectedIndex(index)
        }}
      />
      <p className="text-sm text-muted-foreground">
        Selected: <span className="font-mono font-semibold">{selectedSize}</span> (index: {selectedIndex})
      </p>
    </div>
  )
}

export function DesignSystem() {
  // Generate primary color variants based on current theme
  const [primaryColorVariants, setPrimaryColorVariants] = useState<Record<string, string>>({})
  
  useEffect(() => {
    // Generate variants when component mounts or theme changes
    setPrimaryColorVariants(generatePrimaryColorVariants())
    
    // Optional: Add a MutationObserver to detect theme changes
    const observer = new MutationObserver(() => {
      setPrimaryColorVariants(generatePrimaryColorVariants())
    })
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })
    
    return () => observer.disconnect()
  }, [])
  
  return (
    <main className="flex-1 p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-5xl font-bold tracking-tight">Design System</h1>
          <p className="text-xl text-muted-foreground">
            A comprehensive guide to the design tokens and components used in this application.
          </p>
        </div>

        {/* Colors */}
        <section className="space-y-6">
          <div>
            <h2 className="text-3xl font-semibold mb-2">Colors</h2>
            <p className="text-muted-foreground">
              Our color system uses CSS variables that adapt to both light and dark modes, as well as different themes.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Object.entries(designTokens.colors).map(([name, value]) => (
              <div key={name} className="space-y-2">
                <div 
                  className="h-20 rounded-lg border shadow-sm"
                  style={{ backgroundColor: value }}
                />
                <div className="space-y-1">
                  <p className="text-sm font-medium">{name}</p>
                  <p className="text-xs text-muted-foreground font-mono">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Color Palettes */}
        <section className="space-y-6">
          <div>
            <h2 className="text-3xl font-semibold mb-2">Color Palettes</h2>
            <p className="text-muted-foreground">
              Pre-defined color palettes for consistent color usage across the application.
            </p>
          </div>

          {/* Main Palette */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Main Palette</h3>
            <p className="text-sm text-muted-foreground">A vibrant collection of 12 colors for general use.</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {Object.entries(designTokens.palettes.main).map(([name, value]) => (
                <div key={name} className="space-y-2">
                  <div 
                    className="h-20 rounded-lg border shadow-sm"
                    style={{ backgroundColor: value }}
                  />
                  <div className="space-y-1">
                    <p className="text-sm font-medium capitalize">{name}</p>
                    <p className="text-xs text-muted-foreground font-mono">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Monochrome Palette */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Monochrome Palette</h3>
            <p className="text-sm text-muted-foreground">12 shades of gray from white to black for neutral tones.</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {Object.entries(designTokens.palettes.monochrome).map(([name, value]) => (
                <div key={name} className="space-y-2">
                  <div 
                    className="h-20 rounded-lg border shadow-sm"
                    style={{ backgroundColor: value }}
                  />
                  <div className="space-y-1">
                    <p className="text-sm font-medium capitalize">{name}</p>
                    <p className="text-xs text-muted-foreground font-mono">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Primary Color Variants */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Primary Color Variants</h3>
            <p className="text-sm text-muted-foreground">12 shades of the primary color for depth and hierarchy.</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {Object.entries(primaryColorVariants).map(([name, value]) => (
                <div key={name} className="space-y-2">
                  <div 
                    className="h-20 rounded-lg border shadow-sm"
                    style={{ backgroundColor: value }}
                  />
                  <div className="space-y-1">
                    <p className="text-sm font-medium capitalize">{name}</p>
                    <p className="text-xs text-muted-foreground font-mono">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="space-y-6">
          <div>
            <h2 className="text-3xl font-semibold mb-2">Typography</h2>
            <p className="text-muted-foreground">
              Typography scale and styles for consistent text hierarchy.
            </p>
          </div>
          
          {/* Font Sizes */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Font Sizes</h3>
            <div className="space-y-3">
              {Object.entries(designTokens.typography.fontSize).map(([name, value]) => (
                <div key={name} className="flex items-baseline gap-4 border-b pb-2">
                  <span className="text-sm font-mono text-muted-foreground w-16">{name}</span>
                  <span className="text-xs text-muted-foreground w-20">{value}</span>
                  <span style={{ fontSize: value }}>The quick brown fox jumps over the lazy dog</span>
                </div>
              ))}
            </div>
          </div>

          {/* Font Weights */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Font Weights</h3>
            <div className="space-y-3">
              {Object.entries(designTokens.typography.fontWeight).map(([name, value]) => (
                <div key={name} className="flex items-center gap-4 border-b pb-2">
                  <span className="text-sm font-mono text-muted-foreground w-24">{name}</span>
                  <span className="text-xs text-muted-foreground w-16">{value}</span>
                  <span style={{ fontWeight: value }}>The quick brown fox jumps over the lazy dog</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Spacing */}
        <section className="space-y-6">
          <div>
            <h2 className="text-3xl font-semibold mb-2">Spacing</h2>
            <p className="text-muted-foreground">
              Consistent spacing scale for margins, padding, and gaps.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {Object.entries(designTokens.spacing).map(([name, value]) => (
              <div key={name} className="space-y-2">
                <div className="flex items-end h-24 border rounded">
                  <div 
                    className="bg-primary"
                    style={{ width: value, height: value }}
                  />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">{name}</p>
                  <p className="text-xs text-muted-foreground font-mono">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Border Radius */}
        <section className="space-y-6">
          <div>
            <h2 className="text-3xl font-semibold mb-2">Border Radius</h2>
            <p className="text-muted-foreground">
              Border radius values for consistent corner rounding.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Object.entries(designTokens.borderRadius).map(([name, value]) => (
              <div key={name} className="space-y-2">
                <div 
                  className="h-20 w-full bg-primary"
                  style={{ borderRadius: value }}
                />
                <div className="space-y-1">
                  <p className="text-sm font-medium">{name}</p>
                  <p className="text-xs text-muted-foreground font-mono">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Shadows */}
        <section className="space-y-6">
          <div>
            <h2 className="text-3xl font-semibold mb-2">Shadows</h2>
            <p className="text-muted-foreground">
              Shadow elevation levels for depth and hierarchy.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Object.entries(designTokens.shadows).map(([name, value]) => (
              <div key={name} className="space-y-2">
                <div 
                  className="h-20 w-full bg-card rounded-lg"
                  style={{ boxShadow: value }}
                />
                <div className="space-y-1">
                  <p className="text-sm font-medium">{name}</p>
                  <p className="text-xs text-muted-foreground font-mono break-all">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Components */}
        <section className="space-y-6">
          <div>
            <h2 className="text-3xl font-semibold mb-2">Components</h2>
            <p className="text-muted-foreground">
              Common UI components built with our design system.
            </p>
          </div>

          {/* Buttons */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Buttons</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Variants</p>
                <div className="flex flex-wrap gap-4">
                  <Button>Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                  <Button variant="destructive">Destructive</Button>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Sizes</p>
                <div className="flex flex-wrap items-center gap-4">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                  <Button size="icon">🎨</Button>
                </div>
              </div>
            </div>
          </div>

          {/* Switch */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Switch</h3>
            <div className="flex items-center gap-4">
              <Switch />
              <Switch defaultChecked />
            </div>
          </div>

          {/* Input */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Input</h3>
            <div className="space-y-4 max-w-md">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="disabled">Disabled</Label>
                <Input id="disabled" placeholder="Disabled input" disabled />
              </div>
            </div>
          </div>

          {/* Label with Tooltip */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Label with Tooltip</h3>
            <div className="space-y-4 max-w-md">
              <div className="space-y-2">
                <Label htmlFor="username" tooltip="Enter your unique username">
                  Username
                </Label>
                <Input id="username" type="text" placeholder="Enter username" />
              </div>
              <div className="space-y-2">
                <Label 
                  htmlFor="api-key" 
                  tooltip={
                    <div>
                      <p className="font-semibold">API Key</p>
                      <p className="text-xs">You can find your API key in your account settings</p>
                    </div>
                  }
                >
                  API Key
                </Label>
                <Input id="api-key" type="password" placeholder="Enter API key" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="no-tooltip">Label without tooltip</Label>
                <Input id="no-tooltip" type="text" placeholder="Standard label" />
              </div>
            </div>
          </div>

          {/* Color Picker */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Color Picker</h3>
            <div className="space-y-4 max-w-md">
              <ColorPickerDemo />
              <div className="space-y-2">
                <Label htmlFor="disabled-color">Disabled</Label>
                <ColorPicker id="disabled-color" value="#6b7280" disabled />
              </div>
            </div>
          </div>

          {/* Date Picker */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Date Picker</h3>
            <div className="space-y-4 max-w-md">
              <DatePickerDemo />
              <div className="space-y-2">
                <Label htmlFor="date-with-value">With initial value</Label>
                <DatePicker id="date-with-value" value="2024-01-15" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="disabled-date">Disabled</Label>
                <DatePicker id="disabled-date" value="2024-12-25" disabled />
              </div>
            </div>
          </div>

          {/* Time Picker */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Time Picker</h3>
            <div className="space-y-4 max-w-md">
              <TimePickerDemo />
              <div className="space-y-2">
                <Label htmlFor="time-with-value">With initial value</Label>
                <TimePicker id="time-with-value" value="14:30" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="disabled-time">Disabled</Label>
                <TimePicker id="disabled-time" value="09:00" disabled />
              </div>
            </div>
          </div>

          {/* DateTime Picker */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">DateTime Picker</h3>
            <div className="space-y-4 max-w-md">
              <DateTimePickerDemo />
              <div className="space-y-2">
                <Label htmlFor="datetime-with-value">With initial value</Label>
                <DateTimePicker id="datetime-with-value" value="2024-01-15T14:30" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="disabled-datetime">Disabled</Label>
                <DateTimePicker id="disabled-datetime" value="2024-12-25T18:00" disabled />
              </div>
            </div>
          </div>

          {/* Time Range Picker */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Time Range Picker</h3>
            <div className="space-y-4">
              <TimeRangePickerDemo />
              <div className="space-y-2">
                <Label>With initial value</Label>
                <TimeRangePicker value={{ from: '2024-01-15T10:00', to: '2024-01-15T14:00' }} />
              </div>
              <div className="space-y-2">
                <Label>Disabled</Label>
                <TimeRangePicker value={{ from: '2024-12-25T09:00', to: '2024-12-25T17:00' }} disabled />
              </div>
            </div>
          </div>

          {/* TextArea */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">TextArea</h3>
            <div className="space-y-4 max-w-md">
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Type your message here..." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="disabled-textarea">Disabled</Label>
                <Textarea id="disabled-textarea" placeholder="Disabled textarea" disabled />
              </div>
            </div>
          </div>

          {/* Select/DropDown */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Select / DropDown</h3>
            <div className="space-y-4 max-w-md">
              <div className="space-y-2">
                <Label htmlFor="select-demo">Framework</Label>
                <Select>
                  <SelectTrigger id="select-demo">
                    <SelectValue placeholder="Select a framework" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="react">React</SelectItem>
                    <SelectItem value="vue">Vue</SelectItem>
                    <SelectItem value="angular">Angular</SelectItem>
                    <SelectItem value="svelte">Svelte</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Checkbox */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Checkbox</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="text-sm font-normal">
                  Accept terms and conditions
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="checked" defaultChecked />
                <Label htmlFor="checked" className="text-sm font-normal">
                  Checked by default
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="disabled" disabled />
                <Label htmlFor="disabled" className="text-sm font-normal">
                  Disabled
                </Label>
              </div>
            </div>
          </div>

          {/* Separator/Line */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Separator / Line</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Horizontal</p>
                <div>
                  <p className="text-sm">Above separator</p>
                  <Separator className="my-4" />
                  <p className="text-sm">Below separator</p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Vertical</p>
                <div className="flex h-20 items-center space-x-4">
                  <p className="text-sm">Left</p>
                  <Separator orientation="vertical" />
                  <p className="text-sm">Right</p>
                </div>
              </div>
            </div>
          </div>

          {/* Slider / Range */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Slider / Range</h3>
            <div className="space-y-4 max-w-md">
              <div className="space-y-2">
                <Label>Default Slider</Label>
                <Slider defaultValue={[50]} max={100} step={1} />
              </div>
              <div className="space-y-2">
                <Label>Range Slider</Label>
                <Slider defaultValue={[25, 75]} max={100} step={1} />
              </div>
              <div className="space-y-2">
                <Label>Disabled Slider</Label>
                <Slider defaultValue={[50]} max={100} step={1} disabled />
              </div>
            </div>
          </div>

          {/* Multi-Step Range Slider */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Multi-Step Range Slider</h3>
            <div className="space-y-4 max-w-md">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Size selector (XS, S, M, L, XL)</p>
                <MultiStepRangeSliderDemo />
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Priority levels</p>
                <MultiStepRangeSlider
                  steps={['Low', 'Medium', 'High', 'Critical']}
                  defaultValue={[1]}
                />
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Without labels</p>
                <MultiStepRangeSlider
                  steps={['A', 'B', 'C', 'D', 'E']}
                  defaultValue={[2]}
                  showLabels={false}
                />
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Disabled</p>
                <MultiStepRangeSlider
                  steps={['XS', 'S', 'M', 'L', 'XL']}
                  defaultValue={[2]}
                  disabled
                />
              </div>
            </div>
          </div>

          {/* Badge */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Badge</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Variants</p>
                <div className="flex flex-wrap items-center gap-3">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                  <Badge variant="outline">Outline</Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Tooltip */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Tooltip</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Default Tooltip</p>
                <TooltipProvider>
                  <div className="flex flex-wrap items-center gap-4">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline">Hover me</Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>This is a helpful tooltip</p>
                      </TooltipContent>
                    </Tooltip>
                    
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button>Action Button</Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Click to perform an action</p>
                      </TooltipContent>
                    </Tooltip>
                    
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Badge>Badge with tooltip</Badge>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Tooltips work with any element</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </TooltipProvider>
              </div>
              
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Different positions</p>
                <TooltipProvider>
                  <div className="flex flex-wrap items-center gap-4">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline">Top</Button>
                      </TooltipTrigger>
                      <TooltipContent side="top">
                        <p>Tooltip on top</p>
                      </TooltipContent>
                    </Tooltip>
                    
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline">Right</Button>
                      </TooltipTrigger>
                      <TooltipContent side="right">
                        <p>Tooltip on right</p>
                      </TooltipContent>
                    </Tooltip>
                    
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline">Bottom</Button>
                      </TooltipTrigger>
                      <TooltipContent side="bottom">
                        <p>Tooltip on bottom</p>
                      </TooltipContent>
                    </Tooltip>
                    
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline">Left</Button>
                      </TooltipTrigger>
                      <TooltipContent side="left">
                        <p>Tooltip on left</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </TooltipProvider>
              </div>

              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Rich content</p>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline">Detailed info</Button>
                    </TooltipTrigger>
                    <TooltipContent className="max-w-xs">
                      <div className="space-y-2">
                        <p className="font-semibold">Tooltip Title</p>
                        <p className="text-sm">Tooltips can contain rich content with multiple lines and formatted text.</p>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>

          {/* Tag & Tags */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Tag & Tags List</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Tags with remove action</p>
                <Tags>
                  <Tag onRemove={() => console.log('Remove React')}>React</Tag>
                  <Tag onRemove={() => console.log('Remove TypeScript')}>TypeScript</Tag>
                  <Tag onRemove={() => console.log('Remove Tailwind')}>Tailwind CSS</Tag>
                  <Tag onRemove={() => console.log('Remove Vite')}>Vite</Tag>
                </Tags>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Tags with variants</p>
                <Tags>
                  <Tag variant="default">Default</Tag>
                  <Tag variant="secondary">Secondary</Tag>
                  <Tag variant="outline">Outline</Tag>
                  <Tag variant="outline" onRemove={() => console.log('Remove')}>
                    With Remove
                  </Tag>
                </Tags>
              </div>
            </div>
          </div>

          {/* Multi-Select */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Multi-Select Dropdown</h3>
            <div className="space-y-4 max-w-md">
              <MultiSelectDemo />
            </div>
          </div>

          {/* Card */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Card</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Default card</p>
                <Card className="max-w-md">
                  <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card description goes here</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>This is the card content area where you can place any content.</p>
                  </CardContent>
                  <CardFooter>
                    <Button>Action</Button>
                  </CardFooter>
                </Card>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Outline variant</p>
                <Card variant="outline" className="max-w-md">
                  <CardHeader>
                    <CardTitle>Outline Card</CardTitle>
                    <CardDescription>A card with transparent background</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>This card has a transparent background with just a border.</p>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Elevated variant</p>
                <Card variant="elevated" className="max-w-md">
                  <CardHeader>
                    <CardTitle>Elevated Card</CardTitle>
                    <CardDescription>A card with shadow elevation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>This card has a shadow to create depth and elevation.</p>
                  </CardContent>
                  <CardFooter className="gap-2">
                    <Button variant="outline">Cancel</Button>
                    <Button>Confirm</Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>

          {/* Avatar */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Avatar</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Sizes</p>
                <div className="flex items-center gap-4">
                  <Avatar size="sm">SM</Avatar>
                  <Avatar size="md">MD</Avatar>
                  <Avatar size="lg">LG</Avatar>
                  <Avatar size="xl">XL</Avatar>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">With initials</p>
                <div className="flex items-center gap-4">
                  <Avatar fallback="JD" />
                  <Avatar fallback="AB" />
                  <Avatar fallback="MK" />
                  <Avatar fallback="SL" />
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">With images</p>
                <div className="flex items-center gap-4">
                  <Avatar src="https://i.pravatar.cc/150?img=1" alt="User 1" />
                  <Avatar src="https://i.pravatar.cc/150?img=2" alt="User 2" />
                  <Avatar src="https://i.pravatar.cc/150?img=3" alt="User 3" />
                  <Avatar src="https://i.pravatar.cc/150?img=4" alt="User 4" />
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Fallback behavior</p>
                <div className="flex items-center gap-4">
                  <Avatar src="invalid-url" fallback="FB" alt="Fallback" />
                  <Avatar alt="Alice" />
                  <Avatar>?</Avatar>
                </div>
              </div>
            </div>
          </div>

          {/* Accordion */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Accordion</h3>
            <div className="space-y-4 max-w-2xl">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What is this design system?</AccordionTrigger>
                  <AccordionContent>
                    This is a comprehensive design system built with React, TypeScript, and Tailwind CSS. It includes a wide range of components that follow best practices for accessibility and user experience.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>How can I use these components?</AccordionTrigger>
                  <AccordionContent>
                    All components are available in the <code className="text-sm bg-muted px-1 py-0.5 rounded">src/components/ui</code> directory. Simply import the component you need and use it in your application.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Are these components accessible?</AccordionTrigger>
                  <AccordionContent>
                    Yes! All components are built on top of Radix UI primitives, which provide excellent accessibility out of the box. They follow WAI-ARIA guidelines and support keyboard navigation.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          {/* Collapsible */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Collapsible Section</h3>
            <div className="space-y-4 max-w-2xl">
              <Collapsible className="w-full space-y-2">
                <div className="flex items-center justify-between space-x-4 px-4">
                  <h4 className="text-sm font-semibold">Advanced Settings</h4>
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm" className="w-9 p-0">
                      <ChevronDown className="h-4 w-4" />
                      <span className="sr-only">Toggle</span>
                    </Button>
                  </CollapsibleTrigger>
                </div>
                <div className="rounded-md border px-4 py-3 text-sm">
                  Main content always visible
                </div>
                <CollapsibleContent className="space-y-2">
                  <div className="rounded-md border px-4 py-3 text-sm">
                    Additional setting 1
                  </div>
                  <div className="rounded-md border px-4 py-3 text-sm">
                    Additional setting 2
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>

          {/* Dialog/Modal */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Dialog / Modal / Popup</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Basic dialog</p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">Open Dialog</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Welcome to the Dialog</DialogTitle>
                      <DialogDescription>
                        This is a modal dialog that can display important information or forms.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="py-4">
                      <p className="text-sm">Dialog content goes here. You can add forms, information, or any other content.</p>
                    </div>
                    <DialogFooter>
                      <Button variant="outline">Cancel</Button>
                      <Button>Confirm</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Tabs</h3>
            <div className="space-y-4">
              <Tabs defaultValue="account" className="w-full max-w-2xl">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="account">Account</TabsTrigger>
                  <TabsTrigger value="password">Password</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>
                <TabsContent value="account" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Account</CardTitle>
                      <CardDescription>
                        Make changes to your account here.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="space-y-1">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" defaultValue="John Doe" />
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="username">Username</Label>
                        <Input id="username" defaultValue="@johndoe" />
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="password" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Password</CardTitle>
                      <CardDescription>
                        Change your password here.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="space-y-1">
                        <Label htmlFor="current">Current password</Label>
                        <Input id="current" type="password" />
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="new">New password</Label>
                        <Input id="new" type="password" />
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="settings" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Settings</CardTitle>
                      <CardDescription>
                        Manage your preferences.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="notifications">Email notifications</Label>
                        <Switch id="notifications" />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="marketing">Marketing emails</Label>
                        <Switch id="marketing" />
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* Drawer */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Drawer</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Different drawer positions</p>
                <div className="flex flex-wrap gap-4">
                  <Drawer>
                    <DrawerTrigger asChild>
                      <Button variant="outline">Open from Right</Button>
                    </DrawerTrigger>
                    <DrawerContent side="right">
                      <DrawerHeader>
                        <DrawerTitle>Right Drawer</DrawerTitle>
                        <DrawerDescription>
                          This drawer slides in from the right side.
                        </DrawerDescription>
                      </DrawerHeader>
                      <div className="p-4">
                        <p className="text-sm">Drawer content goes here. Perfect for navigation menus or forms.</p>
                      </div>
                    </DrawerContent>
                  </Drawer>

                  <Drawer>
                    <DrawerTrigger asChild>
                      <Button variant="outline">Open from Left</Button>
                    </DrawerTrigger>
                    <DrawerContent side="left">
                      <DrawerHeader>
                        <DrawerTitle>Left Drawer</DrawerTitle>
                        <DrawerDescription>
                          This drawer slides in from the left side.
                        </DrawerDescription>
                      </DrawerHeader>
                      <div className="p-4">
                        <p className="text-sm">Commonly used for navigation menus.</p>
                      </div>
                    </DrawerContent>
                  </Drawer>

                  <Drawer>
                    <DrawerTrigger asChild>
                      <Button variant="outline">Open from Top</Button>
                    </DrawerTrigger>
                    <DrawerContent side="top">
                      <DrawerHeader>
                        <DrawerTitle>Top Drawer</DrawerTitle>
                        <DrawerDescription>
                          This drawer slides in from the top.
                        </DrawerDescription>
                      </DrawerHeader>
                      <div className="p-4">
                        <p className="text-sm">Great for notifications or alerts.</p>
                      </div>
                    </DrawerContent>
                  </Drawer>

                  <Drawer>
                    <DrawerTrigger asChild>
                      <Button variant="outline">Open from Bottom</Button>
                    </DrawerTrigger>
                    <DrawerContent side="bottom">
                      <DrawerHeader>
                        <DrawerTitle>Bottom Drawer</DrawerTitle>
                        <DrawerDescription>
                          This drawer slides in from the bottom.
                        </DrawerDescription>
                      </DrawerHeader>
                      <div className="p-4">
                        <p className="text-sm">Perfect for mobile-style action sheets.</p>
                      </div>
                    </DrawerContent>
                  </Drawer>
                </div>
              </div>
            </div>
          </div>

          {/* Toast */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Toast Message (Dismissible)</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Toast variants</p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    variant="outline"
                    onClick={() => {
                      toast({
                        title: "Default Toast",
                        description: "This is a default toast message.",
                      })
                    }}
                  >
                    Show Default
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      toast({
                        variant: "destructive",
                        title: "Error Toast",
                        description: "Something went wrong!",
                      })
                    }}
                  >
                    Show Error
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      toast({
                        variant: "success",
                        title: "Success!",
                        description: "Your action was completed successfully.",
                      })
                    }}
                  >
                    Show Success
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      toast({
                        title: "With Action",
                        description: "You can add actions to toasts.",
                        action: (
                          <ToastAction altText="Undo">Undo</ToastAction>
                        ),
                      })
                    }}
                  >
                    With Action
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Alert */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Alert with Variants</h3>
            <div className="space-y-4 max-w-2xl">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Default</p>
                <Alert>
                  <AlertTitle>Heads up!</AlertTitle>
                  <AlertDescription>
                    You can add components to your app using the cli.
                  </AlertDescription>
                </Alert>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Info</p>
                <Alert variant="info">
                  <AlertTitle>Information</AlertTitle>
                  <AlertDescription>
                    This is an informational message with important details.
                  </AlertDescription>
                </Alert>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Success</p>
                <Alert variant="success">
                  <AlertTitle>Success!</AlertTitle>
                  <AlertDescription>
                    Your operation completed successfully.
                  </AlertDescription>
                </Alert>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Warning</p>
                <Alert variant="warning">
                  <AlertTitle>Warning</AlertTitle>
                  <AlertDescription>
                    Please review your settings before proceeding.
                  </AlertDescription>
                </Alert>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Destructive</p>
                <Alert variant="destructive">
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>
                    Your session has expired. Please log in again.
                  </AlertDescription>
                </Alert>
              </div>
            </div>
          </div>
        </section>

        {/* Layout Utilities */}
        <section className="space-y-6">
          <div>
            <h2 className="text-3xl font-semibold mb-2">Layout Utilities</h2>
            <p className="text-muted-foreground">
              Utility components for common layout patterns like Grid, FlexBox, and spacing.
            </p>
          </div>

          {/* Grid */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Grid</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">2 Columns Grid</p>
                <Grid cols={2} gap={4}>
                  <div className="p-4 bg-accent rounded-md">Item 1</div>
                  <div className="p-4 bg-accent rounded-md">Item 2</div>
                  <div className="p-4 bg-accent rounded-md">Item 3</div>
                  <div className="p-4 bg-accent rounded-md">Item 4</div>
                </Grid>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">4 Columns Grid</p>
                <Grid cols={4} gap={3}>
                  <div className="p-3 bg-accent rounded-md text-sm">1</div>
                  <div className="p-3 bg-accent rounded-md text-sm">2</div>
                  <div className="p-3 bg-accent rounded-md text-sm">3</div>
                  <div className="p-3 bg-accent rounded-md text-sm">4</div>
                </Grid>
              </div>
            </div>
          </div>

          {/* Flex */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">FlexBox</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Horizontal (justify-between)</p>
                <Flex justify="between" className="p-4 border rounded-md">
                  <div className="p-2 bg-accent rounded">Left</div>
                  <div className="p-2 bg-accent rounded">Right</div>
                </Flex>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Vertical with center alignment</p>
                <Flex direction="col" align="center" gap={3} className="p-4 border rounded-md">
                  <div className="p-2 bg-accent rounded">Item 1</div>
                  <div className="p-2 bg-accent rounded">Item 2</div>
                  <div className="p-2 bg-accent rounded">Item 3</div>
                </Flex>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Horizontal with gap and wrap</p>
                <Flex wrap="wrap" gap={4} className="p-4 border rounded-md">
                  <div className="p-3 bg-accent rounded">Tag 1</div>
                  <div className="p-3 bg-accent rounded">Tag 2</div>
                  <div className="p-3 bg-accent rounded">Tag 3</div>
                  <div className="p-3 bg-accent rounded">Tag 4</div>
                  <div className="p-3 bg-accent rounded">Tag 5</div>
                </Flex>
              </div>
            </div>
          </div>

          {/* Spacing */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Spacing Utilities</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Spacer Component</p>
                <div className="border rounded-md p-4">
                  <div className="bg-accent p-2 rounded">Item 1</div>
                  <Spacer size={8} />
                  <div className="bg-accent p-2 rounded">Item 2</div>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Box with Padding and Margin</p>
                <Box p={4} className="border rounded-md">
                  <Box p={3} className="bg-accent rounded-md">
                    Content with padding
                  </Box>
                </Box>
              </div>
            </div>
          </div>
        </section>

        {/* Theme Examples */}
        <section className="space-y-6">
          <div>
            <h2 className="text-3xl font-semibold mb-2">Theme System</h2>
            <p className="text-muted-foreground">
              Our application supports 9 different color themes (Sky, Sea, Forest, Gold, Pink, Chocolate, Halloween, Diwali, Valentine's Day) 
              and both light and dark modes. Use the theme selector in the header to try them out!
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}
