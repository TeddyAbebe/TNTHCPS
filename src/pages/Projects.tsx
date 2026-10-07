import { IndexList } from "../components/IndexList.tsx";
import { projects } from "../data/content.ts";
import { usePageTitle } from "../usePageTitle.ts";

export function Projects() {
  usePageTitle("Project");

  return (
    <article>
      <header className="container-site pb-12 pt-16 md:pt-24">
        <p className="kicker">Project</p>
        <h1 className="display mt-5 max-w-4xl">Lines of work.</h1>
        <p className="lede mt-6">
          The project is not one building or one scheme. It is a set of pieces of
          work, each close to a landscape and a community. These are the lines it
          opens with.
        </p>
      </header>
      <div className="container-site pb-20">
        <IndexList
          items={projects.map((item, index) => ({
            to: `/projects/${item.slug}`,
            index: String(index + 1).padStart(2, "0"),
            title: item.title,
            summary: item.summary,
          }))}
        />
      </div>
    </article>
  );
}
