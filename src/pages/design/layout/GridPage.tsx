export function GridPage() {
  return (
    <div className="p-8 max-w-6xl mx-auto space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Grid</h1>
        <p className="text-lg text-muted-foreground">
          CSS Grid layout for creating complex, responsive two-dimensional layouts.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Basic Grid</h2>
        <div className="border rounded-lg p-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-primary/10 p-4 rounded text-center">1</div>
            <div className="bg-primary/10 p-4 rounded text-center">2</div>
            <div className="bg-primary/10 p-4 rounded text-center">3</div>
            <div className="bg-primary/10 p-4 rounded text-center">4</div>
            <div className="bg-primary/10 p-4 rounded text-center">5</div>
            <div className="bg-primary/10 p-4 rounded text-center">6</div>
          </div>
          <pre className="mt-4 p-4 bg-muted rounded-lg overflow-x-auto">
            <code className="text-sm">{`<div className="grid grid-cols-3 gap-4">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
</div>`}</code>
          </pre>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Responsive Grid</h2>
        <div className="border rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-primary/10 p-4 rounded text-center">1</div>
            <div className="bg-primary/10 p-4 rounded text-center">2</div>
            <div className="bg-primary/10 p-4 rounded text-center">3</div>
            <div className="bg-primary/10 p-4 rounded text-center">4</div>
          </div>
          <pre className="mt-4 p-4 bg-muted rounded-lg overflow-x-auto">
            <code className="text-sm">{`<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
</div>`}</code>
          </pre>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Grid with Spanning</h2>
        <div className="border rounded-lg p-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2 bg-primary/10 p-4 rounded text-center">Span 2</div>
            <div className="bg-primary/10 p-4 rounded text-center">1</div>
            <div className="bg-primary/10 p-4 rounded text-center">1</div>
            <div className="col-span-2 bg-primary/10 p-4 rounded text-center">Span 2</div>
            <div className="col-span-3 bg-primary/10 p-4 rounded text-center">Span 3</div>
          </div>
          <pre className="mt-4 p-4 bg-muted rounded-lg overflow-x-auto">
            <code className="text-sm">{`<div className="grid grid-cols-3 gap-4">
  <div className="col-span-2">Span 2</div>
  <div>1</div>
  <div>1</div>
  <div className="col-span-2">Span 2</div>
  <div className="col-span-3">Span 3</div>
</div>`}</code>
          </pre>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Auto-fit Grid</h2>
        <p className="text-muted-foreground">
          Automatically fit as many columns as possible based on minimum width.
        </p>
        <div className="border rounded-lg p-6">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4">
            <div className="bg-primary/10 p-4 rounded text-center">Auto</div>
            <div className="bg-primary/10 p-4 rounded text-center">Auto</div>
            <div className="bg-primary/10 p-4 rounded text-center">Auto</div>
            <div className="bg-primary/10 p-4 rounded text-center">Auto</div>
            <div className="bg-primary/10 p-4 rounded text-center">Auto</div>
          </div>
          <pre className="mt-4 p-4 bg-muted rounded-lg overflow-x-auto">
            <code className="text-sm">{`<div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4">
  <div>Auto</div>
  <div>Auto</div>
  <div>Auto</div>
  <div>Auto</div>
  <div>Auto</div>
</div>`}</code>
          </pre>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Gap Variations</h2>
        <div className="space-y-6">
          <div className="border rounded-lg p-6">
            <p className="text-sm font-medium mb-4">Gap: 2 (0.5rem)</p>
            <div className="grid grid-cols-4 gap-2">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="bg-primary/10 p-4 rounded text-center">{i + 1}</div>
              ))}
            </div>
          </div>
          <div className="border rounded-lg p-6">
            <p className="text-sm font-medium mb-4">Gap: 4 (1rem)</p>
            <div className="grid grid-cols-4 gap-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="bg-primary/10 p-4 rounded text-center">{i + 1}</div>
              ))}
            </div>
          </div>
          <div className="border rounded-lg p-6">
            <p className="text-sm font-medium mb-4">Gap: 8 (2rem)</p>
            <div className="grid grid-cols-4 gap-8">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="bg-primary/10 p-4 rounded text-center">{i + 1}</div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
