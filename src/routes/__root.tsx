import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import "../styles.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Aisha Aliyu Arinola — UI/UX Designer" },
      {
        name: "description",
        content: "Portfolio of Aisha Aliyu Arinola, UI/UX designer & freelancer.",
      },
      { name: "author", content: "Aisha Aliyu Arinola" },
      { property: "og:title", content: "Aisha Aliyu Arinola — UI/UX Designer" },
      {
        property: "og:description",
        content: "Portfolio of Aisha Aliyu Arinola, UI/UX designer & freelancer.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Aisha Aliyu Arinola — UI/UX Designer" },
      {
        name: "twitter:description",
        content: "Portfolio of Aisha Aliyu Arinola, UI/UX designer & freelancer.",
      },
      {
        property: "og:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/2b20c188-05cf-486f-94e1-94ba1a5fb1c7/id-preview-c0d21f6d--8b02e22b-43d3-49d7-8824-84b9cccddbdd.lovable.app-1777261203105.png",
      },
      {
        name: "twitter:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/2b20c188-05cf-486f-94e1-94ba1a5fb1c7/id-preview-c0d21f6d--8b02e22b-43d3-49d7-8824-84b9cccddbdd.lovable.app-1777261203105.png",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
