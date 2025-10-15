import { ComponentPage } from '@/components/ComponentPage'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export function CardPage() {
  return (
    <ComponentPage
      title="Card"
      description="A flexible container component for grouping related content."
      preview={
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card description goes here</CardDescription>
          </CardHeader>
          <CardContent>
            <p>This is the card content area where you can place any content.</p>
          </CardContent>
          <CardFooter>
            <Button>Action</Button>
          </CardFooter>
        </Card>
      }
      code={`import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description goes here</CardDescription>
  </CardHeader>
  <CardContent>
    <p>This is the card content area where you can place any content.</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>`}
      variants={[
        {
          title: 'Outline Variant',
          description: 'Transparent background with border',
          preview: (
            <Card variant="outline" className="max-w-md">
              <CardHeader>
                <CardTitle>Outline Card</CardTitle>
                <CardDescription>A card with transparent background</CardDescription>
              </CardHeader>
              <CardContent>
                <p>This card has a transparent background with just a border.</p>
              </CardContent>
            </Card>
          ),
          code: `<Card variant="outline">
  <CardHeader>
    <CardTitle>Outline Card</CardTitle>
    <CardDescription>A card with transparent background</CardDescription>
  </CardHeader>
  <CardContent>
    <p>This card has a transparent background with just a border.</p>
  </CardContent>
</Card>`,
        },
        {
          title: 'Elevated Variant',
          description: 'Card with shadow elevation',
          preview: (
            <Card variant="elevated" className="max-w-md">
              <CardHeader>
                <CardTitle>Elevated Card</CardTitle>
                <CardDescription>A card with shadow elevation</CardDescription>
              </CardHeader>
              <CardContent>
                <p>This card has a shadow to create depth and elevation.</p>
              </CardContent>
              <CardFooter className="gap-2">
                <Button variant="outline">Cancel</Button>
                <Button>Confirm</Button>
              </CardFooter>
            </Card>
          ),
          code: `<Card variant="elevated">
  <CardHeader>
    <CardTitle>Elevated Card</CardTitle>
    <CardDescription>A card with shadow elevation</CardDescription>
  </CardHeader>
  <CardContent>
    <p>This card has a shadow to create depth and elevation.</p>
  </CardContent>
  <CardFooter className="gap-2">
    <Button variant="outline">Cancel</Button>
    <Button>Confirm</Button>
  </CardFooter>
</Card>`,
        },
      ]}
    />
  )
}
