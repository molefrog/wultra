import { ChangeEvent, useCallback } from "react";
import { useLocation } from "wouter";

import { Locale, useLocale } from "../wouter/RouteWithLocale.tsx";
import { ActiveLink } from "./ActiveLink.tsx";

const HEADING_TRANSLATIONS: Record<Locale, string> = {
  en: "wultra",
  se: "ultraväg",
  jp: "ウルトラルーター",
  ge: "ულტრა როუტერი",
};

/* App navigation header */
export const Header = () => {
  const locale = useLocale();
  const [location, navigate] = useLocation();

  const changeLang = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const locale = e.target.value;

      // ~ is a special character in wouter, it means "relative to base"
      navigate(`~/${locale}${location}`);
    },
    [navigate, location]
  );

  return (
    <header>
      <h1>◈ {HEADING_TRANSLATIONS[locale]}</h1>
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

      <select value={locale} onChange={changeLang}>
        <option value="en">English (en)</option>
        <option value="se">Svenska (se)</option>
        <option value="ge">ქართველი (ge)</option>
        <option value="jp">ジョージア語 (jp)</option>
      </select>
    </header>
  );
};
