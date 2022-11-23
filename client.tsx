import React from "react";
import hydrate from "ultra/hydrate.js";
import App from "./src/app.tsx";

// Wouter
import { Router } from "wouter";
import { SearchParamsProvider } from "./src/wouter/index.tsx";

function ClientApp() {
  return (
    <Router ssrPath={window.location.pathname}>
      <SearchParamsProvider value={new URLSearchParams(window.location.search)}>
        <App />
      </SearchParamsProvider>
    </Router>
  );
}

hydrate(document, <ClientApp />);
