import { designTokens } from '@/lib/design-tokens'

export function LayoutSpacingPage() {
  return (
    <div className="p-8 max-w-6xl mx-auto space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Layout Spacing</h1>
        <p className="text-lg text-muted-foreground">
          Guidelines and examples for applying consistent spacing in layouts.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Container Padding</h2>
        <p className="text-muted-foreground">
          Standard padding values for containers to create breathing room.
        </p>
        <div className="space-y-6">
          <div className="border rounded-lg">
            <div className="bg-muted/30" style={{ padding: designTokens.spacing[4] }}>
              <div className="bg-background p-4 rounded border">
                <p className="text-sm">Padding: 4 ({designTokens.spacing[4]})</p>
              </div>
            </div>
          </div>
          <div className="border rounded-lg">
            <div className="bg-muted/30" style={{ padding: designTokens.spacing[8] }}>
              <div className="bg-background p-4 rounded border">
                <p className="text-sm">Padding: 8 ({designTokens.spacing[8]})</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Margin Spacing</h2>
        <div className="border rounded-lg p-6">
          <div className="bg-muted/30 p-4 rounded">
            <div className="bg-primary/10 p-4 rounded" style={{ marginBottom: designTokens.spacing[4] }}>
              First section (margin-bottom: 4)
            </div>
            <div className="bg-primary/10 p-4 rounded">
              Second section
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Section Spacing</h2>
        <p className="text-muted-foreground">
          Vertical spacing between major page sections.
        </p>
        <div className="border rounded-lg p-6 space-y-8">
          <div className="bg-primary/10 p-6 rounded">
            <h3 className="font-semibold mb-2">Section 1</h3>
            <p className="text-sm text-muted-foreground">Content for the first section.</p>
          </div>
          <div className="bg-primary/10 p-6 rounded">
            <h3 className="font-semibold mb-2">Section 2</h3>
            <p className="text-sm text-muted-foreground">Content for the second section.</p>
          </div>
          <div className="bg-primary/10 p-6 rounded">
            <h3 className="font-semibold mb-2">Section 3</h3>
            <p className="text-sm text-muted-foreground">Content for the third section.</p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Component Spacing</h2>
        <p className="text-muted-foreground">
          Spacing between related components within a section.
        </p>
        <div className="border rounded-lg p-6 space-y-4">
          <div className="bg-primary/10 p-4 rounded">Component 1</div>
          <div className="bg-primary/10 p-4 rounded">Component 2</div>
          <div className="bg-primary/10 p-4 rounded">Component 3</div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Gap in Flex & Grid</h2>
        <div className="space-y-6">
          <div className="border rounded-lg p-6">
            <p className="text-sm font-medium mb-4">Flex with gap-4</p>
            <div className="flex gap-4">
              <div className="bg-primary/10 p-4 rounded flex-1">Item 1</div>
              <div className="bg-primary/10 p-4 rounded flex-1">Item 2</div>
              <div className="bg-primary/10 p-4 rounded flex-1">Item 3</div>
            </div>
          </div>
          <div className="border rounded-lg p-6">
            <p className="text-sm font-medium mb-4">Grid with gap-4</p>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-primary/10 p-4 rounded">Item 1</div>
              <div className="bg-primary/10 p-4 rounded">Item 2</div>
              <div className="bg-primary/10 p-4 rounded">Item 3</div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Spacing Scale Reference</h2>
        <div className="border rounded-lg p-6">
          <div className="space-y-4">
            {Object.entries(designTokens.spacing).map(([name, value]) => (
              <div key={name} className="flex items-center gap-4">
                <div className="w-12 text-sm font-medium text-muted-foreground">{name}</div>
                <div className="w-20 text-xs text-muted-foreground font-mono">{value}</div>
                <div 
                  className="h-8 bg-primary rounded"
                  style={{ width: value }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Best Practices</h2>
        <div className="space-y-3">
          <div className="p-4 border rounded-lg">
            <h4 className="font-medium mb-2">Use consistent spacing</h4>
            <p className="text-sm text-muted-foreground">
              Stick to the spacing scale for all margins, padding, and gaps to maintain visual harmony.
            </p>
          </div>
          <div className="p-4 border rounded-lg">
            <h4 className="font-medium mb-2">Increase spacing for major sections</h4>
            <p className="text-sm text-muted-foreground">
              Use larger spacing values (8, 12, 16) between major page sections to create clear separation.
            </p>
          </div>
          <div className="p-4 border rounded-lg">
            <h4 className="font-medium mb-2">Use smaller spacing for related items</h4>
            <p className="text-sm text-muted-foreground">
              Apply smaller spacing values (2, 3, 4) between closely related elements to show their connection.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
