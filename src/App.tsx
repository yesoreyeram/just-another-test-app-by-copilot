import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from '@/components/Header'
import { Home } from '@/pages/Home'
import { DesignLayout } from '@/pages/DesignLayout'
import { DesignOverview } from '@/pages/design/DesignOverview'
import { SpinnerPage } from '@/pages/design/components/SpinnerPage'
import { ButtonPage } from '@/pages/design/components/ButtonPage'
import { BadgePage } from '@/pages/design/components/BadgePage'
import { AlertPage } from '@/pages/design/components/AlertPage'
import { ProgressPage } from '@/pages/design/components/ProgressPage'
import { CardPage } from '@/pages/design/components/CardPage'
import { ColorsPage } from '@/pages/design/tokens/ColorsPage'
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
            <Route path="tokens/colors" element={<ColorsPage />} />
            <Route path="components/spinner" element={<SpinnerPage />} />
            <Route path="components/button" element={<ButtonPage />} />
            <Route path="components/badge" element={<BadgePage />} />
            <Route path="components/alert" element={<AlertPage />} />
            <Route path="components/progress" element={<ProgressPage />} />
            <Route path="components/card" element={<CardPage />} />
          </Route>
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  )
}

export default App

