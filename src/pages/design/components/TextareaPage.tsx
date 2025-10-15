import { ComponentPage } from '@/components/ComponentPage'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

export function TextareaPage() {
  return (
    <ComponentPage
      title="Textarea"
      description="A multi-line text input component."
      preview={
        <div className="w-full max-w-sm space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" placeholder="Type your message here." />
        </div>
      }
      code={`import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

<div className="space-y-2">
  <Label htmlFor="message">Message</Label>
  <Textarea id="message" placeholder="Type your message here." />
</div>`}
      variants={[
        {
          title: 'With Description',
          description: 'Textarea with helper text',
          preview: (
            <div className="w-full max-w-sm space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea id="bio" placeholder="Tell us about yourself" />
              <p className="text-sm text-muted-foreground">
                You can @mention other users and organizations.
              </p>
            </div>
          ),
          code: `<div className="space-y-2">
  <Label htmlFor="bio">Bio</Label>
  <Textarea id="bio" placeholder="Tell us about yourself" />
  <p className="text-sm text-muted-foreground">
    You can @mention other users and organizations.
  </p>
</div>`,
        },
      ]}
    />
  )
}
