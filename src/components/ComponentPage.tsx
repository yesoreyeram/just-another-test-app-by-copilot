import type { ReactNode } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { SectionDivider } from '@/components/ui/section-divider'

interface ComponentPageProps {
  title: string
  description: string
  preview: ReactNode
  code?: string
  playground?: ReactNode
  variants?: Array<{
    title: string
    description?: string
    preview: ReactNode
    code?: string
  }>
  bestPractices?: ReactNode
}

export function ComponentPage({ title, description, preview, code, playground, variants, bestPractices }: ComponentPageProps) {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="space-y-6">
        {/* Heading */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
          <p className="text-lg text-muted-foreground">{description}</p>
        </div>

        <SectionDivider />

        {/* Main Example */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Example</h2>
          <Tabs defaultValue="preview" className="w-full">
            <TabsList>
              <TabsTrigger value="preview">Preview</TabsTrigger>
              {code && <TabsTrigger value="code">Code</TabsTrigger>}
            </TabsList>
            <TabsContent value="preview" className="border rounded-lg p-6 mt-4">
              <div className="flex items-center justify-center min-h-[200px]">
                {preview}
              </div>
            </TabsContent>
            {code && (
              <TabsContent value="code" className="mt-4">
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code className="text-sm">{code}</code>
                </pre>
              </TabsContent>
            )}
          </Tabs>
        </section>

        {/* Playground */}
        {playground && (
          <>
            <SectionDivider />
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Playground</h2>
              {playground}
            </section>
          </>
        )}

        {/* Variants */}
        {variants && variants.length > 0 && (
          <>
            <SectionDivider />
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Variants</h2>
              <div className="space-y-6">
                {variants.map((variant, index) => (
                  <div key={index} className="space-y-3">
                    <div>
                      <h3 className="text-lg font-medium">{variant.title}</h3>
                      {variant.description && (
                        <p className="text-sm text-muted-foreground">{variant.description}</p>
                      )}
                    </div>
                    <Tabs defaultValue="preview" className="w-full">
                      <TabsList>
                        <TabsTrigger value="preview">Preview</TabsTrigger>
                        {variant.code && <TabsTrigger value="code">Code</TabsTrigger>}
                      </TabsList>
                      <TabsContent value="preview" className="border rounded-lg p-6 mt-4">
                        <div className="flex items-center justify-center min-h-[120px]">
                          {variant.preview}
                        </div>
                      </TabsContent>
                      {variant.code && (
                        <TabsContent value="code" className="mt-4">
                          <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                            <code className="text-sm">{variant.code}</code>
                          </pre>
                        </TabsContent>
                      )}
                    </Tabs>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {/* Best Practices */}
        {bestPractices && (
          <>
            <SectionDivider />
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Best Practices</h2>
              {bestPractices}
            </section>
          </>
        )}
      </div>
    </div>
  )
}
