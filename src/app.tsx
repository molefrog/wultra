import useAsset from "ultra/hooks/use-asset.js";
import { useLocation } from "wouter";

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Ultra</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href={useAsset("/favicon.ico")} />
        <link rel="stylesheet" href={useAsset("/style.css")} />
      </head> 
      <body>
        {useLocation()[0]}
      </body>
    </html>
  );
}
