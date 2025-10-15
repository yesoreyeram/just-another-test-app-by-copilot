import { designTokens } from '@/lib/design-tokens'

export function ColorsPage() {
  return (
    <div className="p-8 max-w-6xl mx-auto space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Colors</h1>
        <p className="text-lg text-muted-foreground">
          Our color system uses CSS variables that adapt to both light and dark modes, as well as different themes.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Semantic Colors</h2>
        <p className="text-muted-foreground">
          Theme-aware semantic colors that automatically adjust based on the selected theme and color mode.
        </p>
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

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Primary Color Palette</h2>
        <p className="text-muted-foreground">
          A comprehensive scale of primary color variants from light to dark, perfect for creating depth and hierarchy.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {Object.entries(designTokens.palettes.primary).map(([name, value]) => (
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

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Main Palette</h2>
        <p className="text-muted-foreground">
          A vibrant collection of 12 colors for general use.
        </p>
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
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Monochrome Palette</h2>
        <p className="text-muted-foreground">
          12 shades of gray from white to black for neutral tones.
        </p>
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
      </section>
    </div>
  )
}
