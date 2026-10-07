import type { ReactNode } from "react";
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
}: {
  kicker: string;
  title: string;
  lede: string;
  picture?: Picture;
  children: ReactNode;
  extra?: ReactNode;
}) {
  usePageTitle(title);

  return (
    <article>
      <header className="container-site pb-12 pt-16 md:pb-16 md:pt-24">
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
