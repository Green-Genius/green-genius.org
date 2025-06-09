// components/TawkScript.tsx
"use client";

import { useEffect } from "react";

export default function TawkScript() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/67580e86af5bfec1dbd9bb9b/1ienvhfb3";
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}
