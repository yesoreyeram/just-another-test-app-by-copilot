export interface NavigationItem {
  title: string
  path?: string
  children?: NavigationItem[]
}

export const designNavigation: NavigationItem[] = [
  {
    title: 'Overview',
    path: '/design',
  },
  {
    title: 'Design Tokens',
    children: [
      { title: 'Colors', path: '/design/tokens/colors' },
      { title: 'Typography', path: '/design/tokens/typography' },
      { title: 'Spacing', path: '/design/tokens/spacing' },
      { title: 'Border Radius', path: '/design/tokens/border-radius' },
      { title: 'Shadows', path: '/design/tokens/shadows' },
    ],
  },
  {
    title: 'Components',
    children: [
      { title: 'Accordion', path: '/design/components/accordion' },
      { title: 'Alert', path: '/design/components/alert' },
      { title: 'Aspect Ratio', path: '/design/components/aspect-ratio' },
      { title: 'Avatar', path: '/design/components/avatar' },
      { title: 'Badge', path: '/design/components/badge' },
      { title: 'Breadcrumbs', path: '/design/components/breadcrumbs' },
      { title: 'Button', path: '/design/components/button' },
      { title: 'Card', path: '/design/components/card' },
      { title: 'Carousel', path: '/design/components/carousel' },
      { title: 'Checkbox', path: '/design/components/checkbox' },
      { title: 'Collapsible', path: '/design/components/collapsible' },
      { title: 'Color Picker', path: '/design/components/color-picker' },
      { title: 'Date Picker', path: '/design/components/date-picker' },
      { title: 'DateTime Picker', path: '/design/components/datetime-picker' },
      { title: 'Dialog', path: '/design/components/dialog' },
      { title: 'Drawer', path: '/design/components/drawer' },
      { title: 'Hover Card', path: '/design/components/hover-card' },
      { title: 'Input', path: '/design/components/input' },
      { title: 'Label', path: '/design/components/label' },
      { title: 'Multi-Select', path: '/design/components/multi-select' },
      { title: 'Multi-Step Range Slider', path: '/design/components/multi-step-range-slider' },
      { title: 'Progress', path: '/design/components/progress' },
      { title: 'Scroll Area', path: '/design/components/scroll-area' },
      { title: 'Section', path: '/design/components/section' },
      { title: 'Section Divider', path: '/design/components/section-divider' },
      { title: 'Select', path: '/design/components/select' },
      { title: 'Separator', path: '/design/components/separator' },
      { title: 'Slider', path: '/design/components/slider' },
      { title: 'Spinner', path: '/design/components/spinner' },
      { title: 'Switch', path: '/design/components/switch' },
      { title: 'Tabs', path: '/design/components/tabs' },
      { title: 'Tag', path: '/design/components/tag' },
      { title: 'Textarea', path: '/design/components/textarea' },
      { title: 'Time Picker', path: '/design/components/time-picker' },
      { title: 'Time Range Picker', path: '/design/components/time-range-picker' },
      { title: 'Toast', path: '/design/components/toast' },
      { title: 'Tooltip', path: '/design/components/tooltip' },
    ],
  },
  {
    title: 'Layout',
    children: [
      { title: 'Grid', path: '/design/layout/grid' },
      { title: 'Flex', path: '/design/layout/flex' },
      { title: 'Spacing', path: '/design/layout/spacing' },
    ],
  },
]
