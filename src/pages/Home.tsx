import { Button } from '@/components/ui/button'

export function Home() {
  return (
    <main className="flex-1 flex items-center justify-center p-4">
      <div className="flex flex-col items-center gap-6 text-center">
        <h1 className="text-6xl font-bold tracking-tight">Hello World</h1>
        <Button size="lg" className="text-lg px-8 py-6">
          Explore more...
        </Button>
      </div>
    </main>
  )
}
