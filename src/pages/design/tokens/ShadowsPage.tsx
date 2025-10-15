import { designTokens } from '@/lib/design-tokens'

export function ShadowsPage() {
  return (
    <div className="p-8 max-w-6xl mx-auto space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Shadows</h1>
        <p className="text-lg text-muted-foreground">
          Shadow tokens for creating depth and elevation in the interface.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Shadow Scale</h2>
        <p className="text-muted-foreground">
          A progressive shadow scale from subtle to prominent, perfect for layering and creating visual hierarchy.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(designTokens.shadows).map(([name, value]) => (
            <div key={name} className="space-y-3">
              <div 
                className="h-32 bg-background rounded-lg flex items-center justify-center"
                style={{ boxShadow: value }}
              >
                <span className="text-sm font-medium text-muted-foreground">Hover to see shadow</span>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium">{name}</p>
                <p className="text-xs text-muted-foreground font-mono break-all">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage Examples</h2>
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Cards with Different Elevations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div 
                className="p-6 bg-card rounded-lg"
                style={{ boxShadow: designTokens.shadows.sm }}
              >
                <h4 className="font-semibold mb-2">Small Shadow</h4>
                <p className="text-sm text-muted-foreground">
                  Subtle elevation for minimal emphasis. Good for nested cards or secondary elements.
                </p>
              </div>
              <div 
                className="p-6 bg-card rounded-lg"
                style={{ boxShadow: designTokens.shadows.md }}
              >
                <h4 className="font-semibold mb-2">Medium Shadow</h4>
                <p className="text-sm text-muted-foreground">
                  Standard elevation for most cards and containers. The default choice for primary content.
                </p>
              </div>
              <div 
                className="p-6 bg-card rounded-lg"
                style={{ boxShadow: designTokens.shadows.lg }}
              >
                <h4 className="font-semibold mb-2">Large Shadow</h4>
                <p className="text-sm text-muted-foreground">
                  Higher elevation for important elements. Creates clear separation from the background.
                </p>
              </div>
              <div 
                className="p-6 bg-card rounded-lg"
                style={{ boxShadow: designTokens.shadows.xl }}
              >
                <h4 className="font-semibold mb-2">Extra Large Shadow</h4>
                <p className="text-sm text-muted-foreground">
                  Maximum elevation for modals and overlays. Draws strong focus to the element.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-medium">Interactive Elements</h3>
            <div className="flex flex-wrap gap-4">
              <button 
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg transition-shadow hover:shadow-lg"
                style={{ boxShadow: designTokens.shadows.sm }}
              >
                Hover for More Shadow
              </button>
              <div 
                className="px-6 py-3 bg-card rounded-lg border"
                style={{ boxShadow: designTokens.shadows.md }}
              >
                Dropdown Menu
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Best Practices</h2>
        <div className="space-y-3">
          <div className="p-4 border rounded-lg">
            <h4 className="font-medium mb-2">Use shadows to indicate elevation</h4>
            <p className="text-sm text-muted-foreground">
              Apply stronger shadows to elements that appear "closer" to the user, such as modals and popovers.
            </p>
          </div>
          <div className="p-4 border rounded-lg">
            <h4 className="font-medium mb-2">Be consistent</h4>
            <p className="text-sm text-muted-foreground">
              Use the same shadow level for similar elements throughout your application.
            </p>
          </div>
          <div className="p-4 border rounded-lg">
            <h4 className="font-medium mb-2">Don't overuse</h4>
            <p className="text-sm text-muted-foreground">
              Too many shadows can create visual clutter. Use them purposefully to guide attention.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
