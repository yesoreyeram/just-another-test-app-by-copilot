import { ComponentPage } from '@/components/ComponentPage'
import { AspectRatio } from '@/components/ui/aspect-ratio'

export function AspectRatioPage() {
  return (
    <ComponentPage
      title="Aspect Ratio"
      description="Displays content within a desired ratio."
      preview={
        <div className="w-full max-w-md">
          <AspectRatio ratio={16 / 9} className="bg-muted rounded-md overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
              alt="Photo by Drew Beamer"
              className="h-full w-full object-cover"
            />
          </AspectRatio>
        </div>
      }
      code={`import { AspectRatio } from '@/components/ui/aspect-ratio'

<AspectRatio ratio={16 / 9}>
  <img
    src="..."
    alt="Image"
    className="h-full w-full object-cover"
  />
</AspectRatio>`}
      variants={[
        {
          title: 'Different Ratios',
          description: 'Common aspect ratios',
          preview: (
            <div className="space-y-4 w-full max-w-md">
              <div>
                <p className="text-sm mb-2">16:9 (Widescreen)</p>
                <AspectRatio ratio={16 / 9} className="bg-muted rounded-md" />
              </div>
              <div>
                <p className="text-sm mb-2">4:3 (Standard)</p>
                <AspectRatio ratio={4 / 3} className="bg-muted rounded-md" />
              </div>
              <div>
                <p className="text-sm mb-2">1:1 (Square)</p>
                <AspectRatio ratio={1} className="bg-muted rounded-md" />
              </div>
            </div>
          ),
          code: `<AspectRatio ratio={16 / 9} />
<AspectRatio ratio={4 / 3} />
<AspectRatio ratio={1} />`,
        },
      ]}
    />
  )
}
