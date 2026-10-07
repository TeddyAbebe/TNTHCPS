import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { programmes } from "../data/content.ts";
import { Mark } from "./Mark.tsx";

const aboutLinks = [
  { to: "/about", label: "Intro" },
  { to: "/about/groups", label: "Nine groups" },
  { to: "/about/todas", label: "Todas of the Nilgiris" },
];

function itemActive(path: string, to: string) {
  return path === to;
}

function sectionActive(path: string, prefix: string) {
  return path === prefix || path.startsWith(`${prefix}/`);
}

export function SiteHeader() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [panel, setPanel] = useState<"about" | "programmes" | null>(null);

  useEffect(() => {
    setOpen(false);
    setPanel(null);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-gold/40 bg-forest text-ivory">
      <div className="container-site flex h-[4.25rem] items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2.5 text-ivory" aria-label="TNTHCPS home">
          <Mark className="h-6 w-7 text-gold" />
          <span className="font-sans text-[13px] font-medium tracking-[0.32em]">TNTHCPS</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          <div
            className="relative"
            onMouseEnter={() => setPanel("about")}
            onMouseLeave={() => setPanel(null)}
          >
            <button
              type="button"
              className={`nav-on-dark ${sectionActive(location.pathname, "/about") ? "text-gold" : ""}`}
              aria-expanded={panel === "about"}
              onClick={() => setPanel(panel === "about" ? null : "about")}
            >
              About
            </button>
            {panel === "about" && (
              <div className="absolute left-0 top-full z-50 pt-2">
                <div className="min-w-64 border border-line bg-ivory py-3 text-charcoal shadow-lg">
                {aboutLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`block px-5 py-2.5 font-display text-lg leading-none hover:bg-ink/[0.03] ${itemActive(location.pathname, link.to) ? "italic" : ""}`}
                  >
                    {link.label}
                  </Link>
                ))}
                </div>
              </div>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={() => setPanel("programmes")}
            onMouseLeave={() => setPanel(null)}
          >
            <button
              type="button"
              className={`nav-on-dark ${sectionActive(location.pathname, "/programmes") ? "text-gold" : ""}`}
              aria-expanded={panel === "programmes"}
              onClick={() => setPanel(panel === "programmes" ? null : "programmes")}
            >
              Programmes
            </button>
            {panel === "programmes" && (
              <div className="absolute left-0 top-full z-50 pt-2">
                <div className="min-w-56 border border-line bg-ivory py-3 text-charcoal shadow-lg">
                <Link
                  to="/programmes"
                  className={`block px-5 py-2.5 font-display text-lg leading-none hover:bg-ink/[0.03] ${itemActive(location.pathname, "/programmes") ? "italic" : ""}`}
                >
                  All programmes
                </Link>
                {programmes.map((item) => (
                  <Link
                    key={item.slug}
                    to={`/programmes/${item.slug}`}
                    className={`block px-5 py-2.5 font-display text-lg leading-none hover:bg-ink/[0.03] ${itemActive(location.pathname, `/programmes/${item.slug}`) ? "italic" : ""}`}
                  >
                    {item.title}
                  </Link>
                ))}
                </div>
              </div>
            )}
          </div>

          <Link
            to="/projects"
            className={`nav-on-dark ${sectionActive(location.pathname, "/projects") ? "text-gold" : ""}`}
          >
            Project
          </Link>
          <Link
            to="/products"
            className={`nav-on-dark ${sectionActive(location.pathname, "/products") ? "text-gold" : ""}`}
          >
            Products
          </Link>
        </nav>

        <button
          type="button"
          className="nav-on-dark md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" className="border-t border-white/10 bg-forest-deep text-ivory md:hidden" aria-label="Mobile">
          <div className="container-site space-y-8 py-8">
            <div>
              <p className="kicker text-gold">About</p>
              <ul className="mt-3 space-y-2">
                {aboutLinks.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="font-display text-3xl">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="kicker text-gold">Programmes</p>
              <ul className="mt-3 space-y-2">
                {programmes.map((item) => (
                  <li key={item.slug}>
                    <Link to={`/programmes/${item.slug}`} className="font-display text-3xl">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <Link to="/projects" className="font-display text-3xl">
                Project
              </Link>
              <Link to="/products" className="font-display text-3xl">
                Products
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
