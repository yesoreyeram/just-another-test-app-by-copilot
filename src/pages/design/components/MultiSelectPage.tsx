import { ComponentPage } from '@/components/ComponentPage'
import { MultiSelect } from '@/components/ui/multi-select'
import { useState } from 'react'

export function MultiSelectPage() {
  const [selected, setSelected] = useState<string[]>([])

  const options = [
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
    { value: 'angular', label: 'Angular' },
    { value: 'svelte', label: 'Svelte' },
  ]

  return (
    <ComponentPage
      title="Multi-Select"
      description="A multi-select component for selecting multiple options from a dropdown."
      preview={
        <div className="w-full max-w-sm">
          <MultiSelect
            options={options}
            selected={selected}
            onChange={setSelected}
            placeholder="Select frameworks..."
          />
        </div>
      }
      code={`import { MultiSelect } from '@/components/ui/multi-select'

const [selected, setSelected] = useState<string[]>([])

const options = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
]

<MultiSelect
  options={options}
  selected={selected}
  onChange={setSelected}
  placeholder="Select frameworks..."
/>`}
    />
  )
}
