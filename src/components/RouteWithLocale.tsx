import { useLocation, Router } from "wouter";
import { ReactNode, createContext, useContext } from "react";

// List of supported locales
const locales = ["en", "se", "ge", "jp"] as const;

export type Locale = (typeof locales)[number];

const LocaleContext = createContext<Locale>("en");
export const useLocale = () => useContext(LocaleContext);

// matches routes /(en|es|...)/*
const ROUTE_REGEXP = new RegExp(`^\/(${locales.join("|")})`, "i");

/**
 * Extracts locale from the URL and creates a nested router context
 * Example:
 *    /en/about -> locale=en,      base=/en, localpath=/about
 *    /about    -> locale=default, base="",  localpath=/about
 */
export const RouteWithLocale = ({
  children,
  defaultLocale,
}: {
  children: ReactNode;
  defaultLocale: Locale;
}) => {
  const [location] = useLocation();
  const [, locale] = ROUTE_REGEXP.exec(location) ?? [];

  const currentLocale = (locale ?? defaultLocale).toLowerCase() as Locale;
  const routerBase = locale ? `/${locale}` : ""; // all nested routes will be relative to /:locale

  return (
    <LocaleContext.Provider value={currentLocale}>
      <Router key={currentLocale} base={routerBase}>
        {children}
      </Router>
    </LocaleContext.Provider>
  );
};
