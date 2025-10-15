import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from '@/components/Header'
import { Home } from '@/pages/Home'
import { DesignSystem } from '@/pages/DesignSystem'
import { Toaster } from '@/components/ui/toaster'

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className="min-h-screen flex flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/design" element={<DesignSystem />} />
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  )
}

export default App

