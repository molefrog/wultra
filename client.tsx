import hydrate from "ultra/hydrate.js";
import App from "./src/app.tsx";

// Wouter
import { Router } from "wouter";

function ClientApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}

hydrate(document, <ClientApp />);
