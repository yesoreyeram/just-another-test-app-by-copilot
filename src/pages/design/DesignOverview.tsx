export function DesignOverview() {
  return (
    <div className="p-8 max-w-6xl mx-auto space-y-8">
      <div className="space-y-4">
        <h1 className="text-5xl font-bold tracking-tight">Design System</h1>
        <p className="text-xl text-muted-foreground">
          A comprehensive guide to the design tokens and components used in this application.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-3xl font-semibold">Getting Started</h2>
        <p className="text-muted-foreground">
          This design system is built with React, TypeScript, and Tailwind CSS. All components 
          are accessible, customizable, and follow best practices.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-semibold">Structure</h2>
        <div className="space-y-2">
          <div>
            <h3 className="text-xl font-medium">Design Tokens</h3>
            <p className="text-muted-foreground">
              Foundation of the design system including colors, typography, spacing, border radius, and shadows.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium">Components</h3>
            <p className="text-muted-foreground">
              Reusable UI components built with Radix UI primitives, providing accessibility out of the box.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium">Layout</h3>
            <p className="text-muted-foreground">
              Utility components for common layout patterns like Grid, Flex, and spacing helpers.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-semibold">Theme System</h2>
        <p className="text-muted-foreground">
          Our application supports 9 different color themes (Sky, Sea, Forest, Gold, Pink, Chocolate, 
          Halloween, Diwali, Valentine's Day) and both light and dark modes. Use the theme selector 
          in the header to try them out!
        </p>
      </section>
    </div>
  )
}
