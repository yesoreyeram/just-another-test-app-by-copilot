import { designTokens } from '@/lib/design-tokens'

export function TypographyPage() {
  return (
    <div className="p-8 max-w-6xl mx-auto space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Typography</h1>
        <p className="text-lg text-muted-foreground">
          Typography tokens define font families, sizes, weights, line heights, and letter spacing.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Font Families</h2>
        <div className="space-y-4">
          <div className="p-4 border rounded-lg">
            <p className="text-sm font-medium text-muted-foreground mb-2">Sans Serif</p>
            <p className="text-2xl" style={{ fontFamily: designTokens.typography.fontFamily.sans }}>
              The quick brown fox jumps over the lazy dog
            </p>
            <p className="text-xs text-muted-foreground font-mono mt-2">{designTokens.typography.fontFamily.sans}</p>
          </div>
          <div className="p-4 border rounded-lg">
            <p className="text-sm font-medium text-muted-foreground mb-2">Monospace</p>
            <p className="text-2xl" style={{ fontFamily: designTokens.typography.fontFamily.mono }}>
              The quick brown fox jumps over the lazy dog
            </p>
            <p className="text-xs text-muted-foreground font-mono mt-2">{designTokens.typography.fontFamily.mono}</p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Font Sizes</h2>
        <div className="space-y-3">
          {Object.entries(designTokens.typography.fontSize).map(([name, value]) => (
            <div key={name} className="flex items-center gap-4 p-4 border rounded-lg">
              <div className="w-20 text-sm font-medium text-muted-foreground">{name}</div>
              <div className="flex-1">
                <p style={{ fontSize: value }}>The quick brown fox</p>
              </div>
              <div className="text-xs text-muted-foreground font-mono">{value}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Font Weights</h2>
        <div className="space-y-3">
          {Object.entries(designTokens.typography.fontWeight).map(([name, value]) => (
            <div key={name} className="flex items-center gap-4 p-4 border rounded-lg">
              <div className="w-20 text-sm font-medium text-muted-foreground">{name}</div>
              <div className="flex-1">
                <p className="text-xl" style={{ fontWeight: value }}>The quick brown fox jumps over the lazy dog</p>
              </div>
              <div className="text-xs text-muted-foreground font-mono">{value}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Line Heights</h2>
        <div className="space-y-3">
          {Object.entries(designTokens.typography.lineHeight).map(([name, value]) => (
            <div key={name} className="p-4 border rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-medium text-muted-foreground">{name}</p>
                <p className="text-xs text-muted-foreground font-mono">{value}</p>
              </div>
              <p style={{ lineHeight: value }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Letter Spacing</h2>
        <div className="space-y-3">
          {Object.entries(designTokens.typography.letterSpacing).map(([name, value]) => (
            <div key={name} className="flex items-center gap-4 p-4 border rounded-lg">
              <div className="w-20 text-sm font-medium text-muted-foreground">{name}</div>
              <div className="flex-1">
                <p style={{ letterSpacing: value }}>THE QUICK BROWN FOX</p>
              </div>
              <div className="text-xs text-muted-foreground font-mono">{value}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
