import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { designTokens } from '@/lib/design-tokens'

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
