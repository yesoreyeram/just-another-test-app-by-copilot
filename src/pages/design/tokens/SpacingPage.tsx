import { designTokens } from '@/lib/design-tokens'

export function SpacingPage() {
  return (
    <div className="p-8 max-w-6xl mx-auto space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Spacing</h1>
        <p className="text-lg text-muted-foreground">
          Spacing tokens provide a consistent scale for margins, padding, and gaps throughout the interface.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Spacing Scale</h2>
        <p className="text-muted-foreground">
          A harmonious spacing scale based on multiples of 4px (0.25rem).
        </p>
        <div className="space-y-6">
          {Object.entries(designTokens.spacing).map(([name, value]) => (
            <div key={name} className="space-y-2">
              <div className="flex items-center gap-4">
                <div className="w-12 text-sm font-medium text-muted-foreground">{name}</div>
                <div className="text-xs text-muted-foreground font-mono w-24">{value}</div>
                <div className="flex-1">
                  <div 
                    className="bg-primary h-8 rounded"
                    style={{ width: value }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage Examples</h2>
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Padding</h3>
            <div className="border rounded-lg p-4 space-y-4">
              <div className="bg-muted rounded" style={{ padding: designTokens.spacing[2] }}>
                <div className="bg-background p-2 rounded">padding: 2 ({designTokens.spacing[2]})</div>
              </div>
              <div className="bg-muted rounded" style={{ padding: designTokens.spacing[4] }}>
                <div className="bg-background p-2 rounded">padding: 4 ({designTokens.spacing[4]})</div>
              </div>
              <div className="bg-muted rounded" style={{ padding: designTokens.spacing[8] }}>
                <div className="bg-background p-2 rounded">padding: 8 ({designTokens.spacing[8]})</div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-medium">Gap</h3>
            <div className="border rounded-lg p-4">
              <div className="flex flex-wrap" style={{ gap: designTokens.spacing[4] }}>
                <div className="bg-primary/10 p-4 rounded">Item 1</div>
                <div className="bg-primary/10 p-4 rounded">Item 2</div>
                <div className="bg-primary/10 p-4 rounded">Item 3</div>
                <div className="bg-primary/10 p-4 rounded">Item 4</div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">gap: 4 ({designTokens.spacing[4]})</p>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-medium">Margin</h3>
            <div className="border rounded-lg p-4">
              <div className="bg-muted p-2 rounded">
                <div className="bg-primary/10 p-4 rounded" style={{ marginBottom: designTokens.spacing[4] }}>
                  First item (margin-bottom: 4)
                </div>
                <div className="bg-primary/10 p-4 rounded">
                  Second item
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
