import { designTokens } from '@/lib/design-tokens'

export function BorderRadiusPage() {
  return (
    <div className="p-8 max-w-6xl mx-auto space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Border Radius</h1>
        <p className="text-lg text-muted-foreground">
          Border radius tokens for creating rounded corners with consistent values.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Border Radius Scale</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(designTokens.borderRadius).map(([name, value]) => (
            <div key={name} className="space-y-3">
              <div 
                className="h-32 bg-primary/10 border-2 border-primary"
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

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage Examples</h2>
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Buttons</h3>
            <div className="flex flex-wrap gap-4">
              <button 
                className="px-4 py-2 bg-primary text-primary-foreground"
                style={{ borderRadius: designTokens.borderRadius.none }}
              >
                None
              </button>
              <button 
                className="px-4 py-2 bg-primary text-primary-foreground"
                style={{ borderRadius: designTokens.borderRadius.sm }}
              >
                Small
              </button>
              <button 
                className="px-4 py-2 bg-primary text-primary-foreground"
                style={{ borderRadius: designTokens.borderRadius.md }}
              >
                Medium
              </button>
              <button 
                className="px-4 py-2 bg-primary text-primary-foreground"
                style={{ borderRadius: designTokens.borderRadius.lg }}
              >
                Large
              </button>
              <button 
                className="px-4 py-2 bg-primary text-primary-foreground"
                style={{ borderRadius: designTokens.borderRadius.full }}
              >
                Full
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-medium">Cards</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div 
                className="p-6 border bg-card"
                style={{ borderRadius: designTokens.borderRadius.lg }}
              >
                <h4 className="font-semibold mb-2">Default Card</h4>
                <p className="text-sm text-muted-foreground">
                  Using the default large border radius for a subtle rounded appearance.
                </p>
              </div>
              <div 
                className="p-6 border bg-card"
                style={{ borderRadius: designTokens.borderRadius['2xl'] }}
              >
                <h4 className="font-semibold mb-2">Extra Large Card</h4>
                <p className="text-sm text-muted-foreground">
                  Using the 2xl border radius for more pronounced corners.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-medium">Avatars and Pills</h3>
            <div className="flex flex-wrap gap-4 items-center">
              <div 
                className="w-16 h-16 bg-primary/20 flex items-center justify-center font-medium"
                style={{ borderRadius: designTokens.borderRadius.full }}
              >
                AB
              </div>
              <span 
                className="px-4 py-2 bg-primary/10 text-sm font-medium"
                style={{ borderRadius: designTokens.borderRadius.full }}
              >
                Pill Badge
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
