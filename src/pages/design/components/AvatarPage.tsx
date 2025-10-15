import { ComponentPage } from '@/components/ComponentPage'
import { Avatar } from '@/components/ui/avatar'

export function AvatarPage() {
  return (
    <ComponentPage
      title="Avatar"
      description="An image element with a fallback for representing the user."
      preview={
        <Avatar
          src="https://github.com/shadcn.png"
          alt="User"
          fallback="U"
        />
      }
      code={`import { Avatar } from '@/components/ui/avatar'

<Avatar
  src="https://github.com/shadcn.png"
  alt="User"
  fallback="U"
/>`}
      variants={[
        {
          title: 'Sizes',
          description: 'Different avatar sizes',
          preview: (
            <div className="flex items-center gap-4">
              <Avatar size="sm" fallback="S" />
              <Avatar size="md" fallback="M" />
              <Avatar size="lg" fallback="L" />
              <Avatar size="xl" fallback="XL" />
            </div>
          ),
          code: `<Avatar size="sm" fallback="S" />
<Avatar size="md" fallback="M" />
<Avatar size="lg" fallback="L" />
<Avatar size="xl" fallback="XL" />`,
        },
        {
          title: 'With Fallback',
          description: 'Avatar with initials fallback',
          preview: (
            <div className="flex items-center gap-4">
              <Avatar fallback="JD" />
              <Avatar fallback="AB" />
              <Avatar fallback="CD" />
            </div>
          ),
          code: `<Avatar fallback="JD" />
<Avatar fallback="AB" />
<Avatar fallback="CD" />`,
        },
      ]}
    />
  )
}
