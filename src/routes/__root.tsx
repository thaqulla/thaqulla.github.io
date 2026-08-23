import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";

import { Provider } from "@/components/ui/provider";

import "@/styles/main.scss";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "thaqulla.github.io" },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <html lang="ja">
      <head>
        <HeadContent />
      </head>
      <body>
        <Provider>
          <Outlet />
        </Provider>
        <Scripts />
      </body>
    </html>
  );
}
