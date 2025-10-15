import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from '@/components/Header'
import { Home } from '@/pages/Home'
import { DesignLayout } from '@/pages/DesignLayout'
import { DesignOverview } from '@/pages/design/DesignOverview'
import { ComponentsOverview } from '@/pages/design/components/ComponentsOverview'
import { SpinnerPage } from '@/pages/design/components/SpinnerPage'
import { ButtonPage } from '@/pages/design/components/ButtonPage'
import { BadgePage } from '@/pages/design/components/BadgePage'
import { AlertPage } from '@/pages/design/components/AlertPage'
import { ProgressPage } from '@/pages/design/components/ProgressPage'
import { ScrollAreaPage } from '@/pages/design/components/ScrollAreaPage'
import { CardPage } from '@/pages/design/components/CardPage'
import { AccordionPage } from '@/pages/design/components/AccordionPage'
import { AspectRatioPage } from '@/pages/design/components/AspectRatioPage'
import { AvatarPage } from '@/pages/design/components/AvatarPage'
import { BreadcrumbsPage } from '@/pages/design/components/BreadcrumbsPage'
import { CarouselPage } from '@/pages/design/components/CarouselPage'
import { CheckboxPage } from '@/pages/design/components/CheckboxPage'
import { CollapsiblePage } from '@/pages/design/components/CollapsiblePage'
import { ColorPickerPage } from '@/pages/design/components/ColorPickerPage'
import { DatePickerPage } from '@/pages/design/components/DatePickerPage'
import { DateTimePickerPage } from '@/pages/design/components/DateTimePickerPage'
import { DialogPage } from '@/pages/design/components/DialogPage'
import { DrawerPage } from '@/pages/design/components/DrawerPage'
import { HoverCardPage } from '@/pages/design/components/HoverCardPage'
import { InputPage } from '@/pages/design/components/InputPage'
import { LabelPage } from '@/pages/design/components/LabelPage'
import { MultiSelectPage } from '@/pages/design/components/MultiSelectPage'
import { MultiStepRangeSliderPage } from '@/pages/design/components/MultiStepRangeSliderPage'
import { SectionPage } from '@/pages/design/components/SectionPage'
import { SectionDividerPage } from '@/pages/design/components/SectionDividerPage'
import { SelectPage } from '@/pages/design/components/SelectPage'
import { SeparatorPage } from '@/pages/design/components/SeparatorPage'
import { SliderPage } from '@/pages/design/components/SliderPage'
import { SwitchPage } from '@/pages/design/components/SwitchPage'
import { TabsPage } from '@/pages/design/components/TabsPage'
import { TagPage } from '@/pages/design/components/TagPage'
import { TextareaPage } from '@/pages/design/components/TextareaPage'
import { TimePickerPage } from '@/pages/design/components/TimePickerPage'
import { TimeRangePickerPage } from '@/pages/design/components/TimeRangePickerPage'
import { ToastPage } from '@/pages/design/components/ToastPage'
import { TooltipPage } from '@/pages/design/components/TooltipPage'
import { ColorsPage } from '@/pages/design/tokens/ColorsPage'
import { TypographyPage } from '@/pages/design/tokens/TypographyPage'
import { SpacingPage } from '@/pages/design/tokens/SpacingPage'
import { BorderRadiusPage } from '@/pages/design/tokens/BorderRadiusPage'
import { ShadowsPage } from '@/pages/design/tokens/ShadowsPage'
import { GridPage } from '@/pages/design/layout/GridPage'
import { FlexPage } from '@/pages/design/layout/FlexPage'
import { LayoutSpacingPage } from '@/pages/design/layout/LayoutSpacingPage'
import { Toaster } from '@/components/ui/toaster'

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className="min-h-screen flex flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/design" element={<DesignLayout />}>
            <Route index element={<DesignOverview />} />
            <Route path="components" element={<ComponentsOverview />} />
            <Route path="tokens/colors" element={<ColorsPage />} />
            <Route path="tokens/typography" element={<TypographyPage />} />
            <Route path="tokens/spacing" element={<SpacingPage />} />
            <Route path="tokens/border-radius" element={<BorderRadiusPage />} />
            <Route path="tokens/shadows" element={<ShadowsPage />} />
            <Route path="layout/grid" element={<GridPage />} />
            <Route path="layout/flex" element={<FlexPage />} />
            <Route path="layout/spacing" element={<LayoutSpacingPage />} />
            <Route path="components/accordion" element={<AccordionPage />} />
            <Route path="components/alert" element={<AlertPage />} />
            <Route path="components/aspect-ratio" element={<AspectRatioPage />} />
            <Route path="components/avatar" element={<AvatarPage />} />
            <Route path="components/badge" element={<BadgePage />} />
            <Route path="components/breadcrumbs" element={<BreadcrumbsPage />} />
            <Route path="components/button" element={<ButtonPage />} />
            <Route path="components/card" element={<CardPage />} />
            <Route path="components/carousel" element={<CarouselPage />} />
            <Route path="components/checkbox" element={<CheckboxPage />} />
            <Route path="components/collapsible" element={<CollapsiblePage />} />
            <Route path="components/color-picker" element={<ColorPickerPage />} />
            <Route path="components/date-picker" element={<DatePickerPage />} />
            <Route path="components/datetime-picker" element={<DateTimePickerPage />} />
            <Route path="components/dialog" element={<DialogPage />} />
            <Route path="components/drawer" element={<DrawerPage />} />
            <Route path="components/hover-card" element={<HoverCardPage />} />
            <Route path="components/input" element={<InputPage />} />
            <Route path="components/label" element={<LabelPage />} />
            <Route path="components/multi-select" element={<MultiSelectPage />} />
            <Route path="components/multi-step-range-slider" element={<MultiStepRangeSliderPage />} />
            <Route path="components/progress" element={<ProgressPage />} />
            <Route path="components/scroll-area" element={<ScrollAreaPage />} />
            <Route path="components/section" element={<SectionPage />} />
            <Route path="components/section-divider" element={<SectionDividerPage />} />
            <Route path="components/select" element={<SelectPage />} />
            <Route path="components/separator" element={<SeparatorPage />} />
            <Route path="components/slider" element={<SliderPage />} />
            <Route path="components/spinner" element={<SpinnerPage />} />
            <Route path="components/switch" element={<SwitchPage />} />
            <Route path="components/tabs" element={<TabsPage />} />
            <Route path="components/tag" element={<TagPage />} />
            <Route path="components/textarea" element={<TextareaPage />} />
            <Route path="components/time-picker" element={<TimePickerPage />} />
            <Route path="components/time-range-picker" element={<TimeRangePickerPage />} />
            <Route path="components/toast" element={<ToastPage />} />
            <Route path="components/tooltip" element={<TooltipPage />} />
          </Route>
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  )
}

export default App

