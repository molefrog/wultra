import useAsset from "ultra/hooks/use-asset.js";
import { Link, Route, Switch } from "wouter";
import { ActiveLink } from "./components/ActiveLink.tsx";

const Home = () => {
  return (
    <>
      <h1>Welcome</h1>
      <br />
      <p>
        This demo project shows how wouter can be used with Ultra.js, a Deno framework. The upcoming
        2.11.0 release of wouter has a built-in support for server-side rendering via a simple prop
        for defining server-side location.
      </p>
    </>
  );
};

const SSR = () => {
  return (
    <>
      <p>
        In order to render your app on the server, you'll need to wrap your app with top-level
        <code>Router</code> and specify <code>ssrPath</code> prop (usually, derived from current
        request).
      </p>

      <pre>{`import { renderToString } from "react-dom/server";
import { Router } from "wouter";

const handleRequest = (req, res) => {
  // top-level Router is mandatory in SSR mode
  const prerendered = renderToString(
    <Router ssrPath={req.path}>
      <App />
    </Router>
  );

  // respond with prerendered html
};`}</pre>
      <p>
        On the client, the static markup must be hydrated in order for your app to become
        interactive.
      </p>

      <pre>{`import { hydrateRoot } from "react-dom/server";

const root = hydrateRoot(
  domNode,
  // during hydration \`ssrPath\` is set to \`location.pathname\`
  <Router>
    <App />
  </Router>
);`}</pre>

      <blockquote>
        ❕ <b>Note</b> that to avoid having hydration warnings, the JSX rendered on the client must
        match the one used by the server, so the <code>Router</code> component must be present.
      </blockquote>
    </>
  );
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Ultra + Wouter</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href={useAsset("/favicon.ico")} />

        <link rel="stylesheet" href="https://fonts.xz.style/serve/inter.css" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@exampledev/new.css@1.1.2/new.min.css"
        />
      </head>
      <body>
        <header>
          <h1>◈ wultra </h1>
          <p>ultra + wouter</p>
          <nav>
            <ActiveLink boldWhenActive href="/">
              Home
            </ActiveLink>
            {" / "}
            <ActiveLink boldWhenActive href="/ssr">
              SSR setup
            </ActiveLink>
            {" / "}
            <ActiveLink boldWhenActive href="/usage">
              Elements
            </ActiveLink>
            {" · "}
            <a href="https://github.com/molefrog/wouter" target="_blank">
              wouter↗
            </a>
          </nav>
        </header>

        <Switch>
          <Route path="/" component={Home} />
          <Route path="/ssr" component={SSR} />

          <Route>
            <center>
              <h1>Not Found 🕵️</h1>
              <br />
              <p>That's 404. There is nothing to render.</p>
            </center>
          </Route>
        </Switch>
      </body>
    </html>
  );
}
