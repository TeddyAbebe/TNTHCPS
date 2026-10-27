import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Opening } from "./Opening.tsx";
import { SiteFooter } from "./SiteFooter.tsx";
import { SiteHeader } from "./SiteHeader.tsx";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const node = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (node) {
        node.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export function Layout() {
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen bg-paper">
      <Opening />
      <ScrollToTop />
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="content" key={pathname} className="animate-rise">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
