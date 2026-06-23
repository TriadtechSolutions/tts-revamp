"use client";

import { useEffect } from "react";

export default function AboutUsRedirectPage() {
  useEffect(() => {
    window.location.replace("/#about-us");
  }, []);

  return (
    <p style={{ padding: "4rem", textAlign: "center" }}>
      Redirecting to About Us…
    </p>
  );
}
