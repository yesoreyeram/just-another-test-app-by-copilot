import { Outlet } from 'react-router-dom'
import { DesignSidebar } from '@/components/DesignSidebar'

export function DesignLayout() {
  return (
    <div className="flex flex-1 overflow-hidden">
      <DesignSidebar />
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  )
}
