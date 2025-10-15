import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from '@/components/Header'
import { Home } from '@/pages/Home'
import { DesignLayout } from '@/pages/DesignLayout'
import { DesignOverview } from '@/pages/design/DesignOverview'
import { SpinnerPage } from '@/pages/design/components/SpinnerPage'
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
            <Route path="components/spinner" element={<SpinnerPage />} />
          </Route>
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  )
}

export default App

