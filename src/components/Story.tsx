import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import type { Picture } from "../data/content.ts";
import { usePageTitle } from "../usePageTitle.ts";
import { Figure } from "./Figure.tsx";

export function Story({
  kicker,
  title,
  lede,
  picture,
  children,
  extra,
  back,
}: {
  kicker: string;
  title: string;
  lede: string;
  picture?: Picture;
  children: ReactNode;
  extra?: ReactNode;
  back?: { to: string; label: string };
}) {
  usePageTitle(title);

  return (
    <article>
      <header className="container-site pb-12 pt-10 md:pb-16 md:pt-16">
        {back && (
          <Link to={back.to} className="mb-8 inline-flex items-center gap-2 font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-ink hover:text-forest">
            <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" aria-hidden="true">
              <path d="M13 8H3M6.5 4.5 3 8l3.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {back.label}
          </Link>
        )}
        <p className="kicker">{kicker}</p>
        <h1 className="display mt-5 max-w-4xl">{title}</h1>
        <p className="lede mt-6">{lede}</p>
      </header>
      {picture && (
        <div className="container-site">
          <Figure picture={picture} />
        </div>
      )}
      <div className="container-site py-14 md:py-20">
        <div className="prose-quiet max-w-reading">{children}</div>
        {extra}
      </div>
    </article>
  );
}
