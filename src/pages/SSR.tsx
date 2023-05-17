export const SSR = () => {
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

export default SSR;
