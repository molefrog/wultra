import useAsset from "ultra/hooks/use-asset.js";
import { Link, Route, Switch } from "wouter";
import { ActiveLink } from "./components/ActiveLink.tsx";

const Home = () => {
  return (
    <>
      <h1>Welcome</h1>
      <br />
      <p>
        <code>AI-generated</code> Welcome to our test website! Here, we demonstrate how to use the
        <i>wouter</i> and <i>ultra</i> libraries together to create beautiful and functional web
        applications. Our website includes examples of routing, state management, and more, and we
        hope to inspire you to use these powerful tools in your own projects.
      </p>
    </>
  );
};

const SSR = () => {
  return (
    <>
      <p>
        In order to render your app on the server, you'll need to wrap your app with top-level
        Router and specify <code>ssrPath</code> prop (usually, derived from current request). Once
        hydrated, your app will start using browser location as usual.
      </p>

      <blockquote>
        ❕ It's important that your JSX markup is the same on the server and in the browser. This
        ensures that the app can be properly hydrated. Hence, the top-level{" "}
        <code>{"<Router />"}</code> must be present, and <code>ssrPath</code> prop should be devired
        from browser location on the client (e.g. <code>location.pathname</code>).
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
