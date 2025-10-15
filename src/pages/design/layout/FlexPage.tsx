export function FlexPage() {
  return (
    <div className="p-8 max-w-6xl mx-auto space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Flex</h1>
        <p className="text-lg text-muted-foreground">
          Flexbox layout for creating flexible, one-dimensional layouts.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Basic Flex</h2>
        <div className="border rounded-lg p-6">
          <div className="flex gap-4">
            <div className="bg-primary/10 p-4 rounded">Item 1</div>
            <div className="bg-primary/10 p-4 rounded">Item 2</div>
            <div className="bg-primary/10 p-4 rounded">Item 3</div>
          </div>
          <pre className="mt-4 p-4 bg-muted rounded-lg overflow-x-auto">
            <code className="text-sm">{`<div className="flex gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`}</code>
          </pre>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Direction</h2>
        <div className="space-y-6">
          <div className="border rounded-lg p-6">
            <p className="text-sm font-medium mb-4">Row (default)</p>
            <div className="flex flex-row gap-4">
              <div className="bg-primary/10 p-4 rounded">1</div>
              <div className="bg-primary/10 p-4 rounded">2</div>
              <div className="bg-primary/10 p-4 rounded">3</div>
            </div>
          </div>
          <div className="border rounded-lg p-6">
            <p className="text-sm font-medium mb-4">Column</p>
            <div className="flex flex-col gap-4">
              <div className="bg-primary/10 p-4 rounded">1</div>
              <div className="bg-primary/10 p-4 rounded">2</div>
              <div className="bg-primary/10 p-4 rounded">3</div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Justify Content</h2>
        <div className="space-y-6">
          <div className="border rounded-lg p-6">
            <p className="text-sm font-medium mb-4">Start (default)</p>
            <div className="flex justify-start gap-4 bg-muted/30 p-4 rounded">
              <div className="bg-primary/10 p-4 rounded">1</div>
              <div className="bg-primary/10 p-4 rounded">2</div>
              <div className="bg-primary/10 p-4 rounded">3</div>
            </div>
          </div>
          <div className="border rounded-lg p-6">
            <p className="text-sm font-medium mb-4">Center</p>
            <div className="flex justify-center gap-4 bg-muted/30 p-4 rounded">
              <div className="bg-primary/10 p-4 rounded">1</div>
              <div className="bg-primary/10 p-4 rounded">2</div>
              <div className="bg-primary/10 p-4 rounded">3</div>
            </div>
          </div>
          <div className="border rounded-lg p-6">
            <p className="text-sm font-medium mb-4">End</p>
            <div className="flex justify-end gap-4 bg-muted/30 p-4 rounded">
              <div className="bg-primary/10 p-4 rounded">1</div>
              <div className="bg-primary/10 p-4 rounded">2</div>
              <div className="bg-primary/10 p-4 rounded">3</div>
            </div>
          </div>
          <div className="border rounded-lg p-6">
            <p className="text-sm font-medium mb-4">Between</p>
            <div className="flex justify-between gap-4 bg-muted/30 p-4 rounded">
              <div className="bg-primary/10 p-4 rounded">1</div>
              <div className="bg-primary/10 p-4 rounded">2</div>
              <div className="bg-primary/10 p-4 rounded">3</div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Align Items</h2>
        <div className="space-y-6">
          <div className="border rounded-lg p-6">
            <p className="text-sm font-medium mb-4">Start</p>
            <div className="flex items-start gap-4 bg-muted/30 p-4 rounded h-32">
              <div className="bg-primary/10 p-4 rounded">1</div>
              <div className="bg-primary/10 p-8 rounded">2</div>
              <div className="bg-primary/10 p-4 rounded">3</div>
            </div>
          </div>
          <div className="border rounded-lg p-6">
            <p className="text-sm font-medium mb-4">Center</p>
            <div className="flex items-center gap-4 bg-muted/30 p-4 rounded h-32">
              <div className="bg-primary/10 p-4 rounded">1</div>
              <div className="bg-primary/10 p-8 rounded">2</div>
              <div className="bg-primary/10 p-4 rounded">3</div>
            </div>
          </div>
          <div className="border rounded-lg p-6">
            <p className="text-sm font-medium mb-4">End</p>
            <div className="flex items-end gap-4 bg-muted/30 p-4 rounded h-32">
              <div className="bg-primary/10 p-4 rounded">1</div>
              <div className="bg-primary/10 p-8 rounded">2</div>
              <div className="bg-primary/10 p-4 rounded">3</div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Flex Grow & Shrink</h2>
        <div className="space-y-6">
          <div className="border rounded-lg p-6">
            <p className="text-sm font-medium mb-4">Flex 1 (grow and shrink equally)</p>
            <div className="flex gap-4">
              <div className="flex-1 bg-primary/10 p-4 rounded text-center">Flex 1</div>
              <div className="flex-1 bg-primary/10 p-4 rounded text-center">Flex 1</div>
              <div className="flex-1 bg-primary/10 p-4 rounded text-center">Flex 1</div>
            </div>
          </div>
          <div className="border rounded-lg p-6">
            <p className="text-sm font-medium mb-4">Mixed flex values</p>
            <div className="flex gap-4">
              <div className="flex-1 bg-primary/10 p-4 rounded text-center">Flex 1</div>
              <div className="flex-[2] bg-primary/10 p-4 rounded text-center">Flex 2</div>
              <div className="flex-1 bg-primary/10 p-4 rounded text-center">Flex 1</div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Wrap</h2>
        <div className="border rounded-lg p-6">
          <div className="flex flex-wrap gap-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="bg-primary/10 p-4 rounded w-24 text-center">
                {i + 1}
              </div>
            ))}
          </div>
          <pre className="mt-4 p-4 bg-muted rounded-lg overflow-x-auto">
            <code className="text-sm">{`<div className="flex flex-wrap gap-4">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  ...
</div>`}</code>
          </pre>
        </div>
      </section>
    </div>
  )
}
