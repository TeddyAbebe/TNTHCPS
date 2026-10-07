import { IndexList } from "../components/IndexList.tsx";
import { programmes } from "../data/content.ts";
import { usePageTitle } from "../usePageTitle.ts";

export function Programmes() {
  usePageTitle("Programmes");

  return (
    <article>
      <header className="container-site pb-12 pt-16 md:pt-24">
        <p className="kicker">Programmes</p>
        <h1 className="display mt-5 max-w-4xl">Four programmes.</h1>
        <p className="lede mt-6">
          Livelihood, conservation, education, and rights. Each one is a way of
          paying attention. None of them replaces the community it sits beside.
        </p>
      </header>
      <div className="container-site pb-20">
        <IndexList
          items={programmes.map((item, index) => ({
            to: `/programmes/${item.slug}`,
            index: String(index + 1).padStart(2, "0"),
            title: item.title,
            summary: item.summary,
          }))}
        />
        <p className="mt-10 max-w-reading text-lg text-mute">
          The list is open. A fifth programme can take the next line when there is
          work that does not fit these four.
        </p>
      </div>
    </article>
  );
}
