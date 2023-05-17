import useAsset from "ultra/hooks/use-asset.js";
import { Route, Switch } from "wouter";

import { Header } from "./components/Header.tsx";
import { RouteWithLocale } from "./wouter/RouteWithLocale.tsx";

// pages
import HomePage from "./pages/Home.tsx";
import SsrPage from "./pages/SSR.tsx";

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Ultra + Wouter</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href={useAsset("/favicon.svg")} type="image/svg+xml" />

        <link rel="stylesheet" href="https://fonts.xz.style/serve/inter.css" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@exampledev/new.css@1.1.2/new.min.css"
        />
      </head>
      <body>
        <RouteWithLocale defaultLocale="en">
          <Header />

          <Switch>
            <Route path="/" component={HomePage} />
            <Route path="/ssr" component={SsrPage} />

            <Route>
              <center>
                <h1>Not Found 🕵️</h1>
                <br />
                <p>That's 404. There is nothing to render.</p>
              </center>
            </Route>
          </Switch>
        </RouteWithLocale>
      </body>
    </html>
  );
}
