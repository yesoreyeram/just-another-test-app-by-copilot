import { Outlet } from 'react-router-dom'
import { DesignSidebar } from '@/components/DesignSidebar'
import { ScrollArea } from '@/components/ui/scroll-area'

export function DesignLayout() {
  return (
    <div className="flex flex-1 overflow-hidden">
      <DesignSidebar />
      <ScrollArea className="flex-1">
        <Outlet />
      </ScrollArea>
    </div>
  )
}
