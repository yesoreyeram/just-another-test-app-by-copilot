import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { Slider } from '@/components/ui/slider'
import { Badge } from '@/components/ui/badge'
import { Tag, Tags } from '@/components/ui/tag'
import { MultiSelect } from '@/components/ui/multi-select'
import { Grid, Flex } from '@/components/ui/layout'
import { Spacer, Box } from '@/components/ui/spacing'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Avatar } from '@/components/ui/avatar'
import { ColorPicker } from '@/components/ui/color-picker'
import { designTokens } from '@/lib/design-tokens'

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

export function DesignSystem() {
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
              {Object.entries(designTokens.palettes.primary).map(([name, value]) => (
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
              Our application supports 6 different color themes (Sky, Sea, Forest, Gold, Pink, Chocolate) 
              and both light and dark modes. Use the theme selector in the header to try them out!
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}
