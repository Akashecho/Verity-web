import { Button, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Input } from '@/components/ui';

export default function HomePage() {
  return (
    <main className="space-y-8">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-display text-neutral-900 mb-4">
          Welcome to Verity Web
        </h1>
        <p className="text-body text-neutral-600 max-w-2xl mx-auto">
          A modern web application built with Next.js, TypeScript, and Tailwind CSS.
          Following best practices for UI/UX design and accessibility.
        </p>
      </section>

      {/* Component Showcase */}
      <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Button Card */}
        <Card>
          <CardHeader>
            <CardTitle>Buttons</CardTitle>
            <CardDescription>
              Interactive buttons with loading states
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-3">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="danger">Danger</Button>
          </CardContent>
        </Card>

        {/* Input Card */}
        <Card>
          <CardHeader>
            <CardTitle>Inputs</CardTitle>
            <CardDescription>
              Form inputs with validation
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              label="Email"
              type="email"
              placeholder="your@email.com"
              required
            />
            <Input
              label="With Error"
              placeholder="Type something"
              error="This field is required"
            />
          </CardContent>
        </Card>

        {/* Status Card */}
        <Card>
          <CardHeader>
            <CardTitle>Design System</CardTitle>
            <CardDescription>
              Tokens & Guidelines
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <span className="badge badge-primary">Primary #6366F1</span>
              <span className="badge badge-success">Success #10B981</span>
              <span className="badge badge-warning">Warning #F59E0B</span>
              <span className="badge badge-error">Error #EF4444</span>
            </div>
          </CardContent>
          <CardFooter>
            <span className="text-small text-neutral-500">
              Tap any component to learn more
            </span>
          </CardFooter>
        </Card>
      </section>
    </main>
  );
}