import { Link } from "react-router-dom";
import { six, three, type Community } from "../data/content.ts";
import { usePageTitle } from "../usePageTitle.ts";

function GroupBlock({ group, extra }: { group: Community; extra?: boolean }) {
  return (
    <article id={group.slug} className="scroll-mt-28 border-t border-line py-10 md:grid md:grid-cols-12 md:gap-8">
      <div className="md:col-span-4">
        <h3 className="font-display text-4xl font-medium">{group.name}</h3>
        <p className="kicker mt-3">{group.place}</p>
      </div>
      <div className="mt-4 md:col-span-7 md:mt-1">
        <p className="text-[1.075rem] leading-[1.8] text-ink/90">{group.reading}</p>
        {extra && (
          <Link to="/about/todas" className="text-link mt-6">
            Todas of the Nilgiris
          </Link>
        )}
      </div>
    </article>
  );
}

export function Groups() {
  usePageTitle("Nine groups");

  return (
    <article>
      <header className="container-site pb-14 pt-16 md:pt-24">
        <p className="kicker">About</p>
        <h1 className="display mt-5 max-w-4xl">Nine groups.</h1>
        <p className="lede mt-6">
          Six Particularly Vulnerable Tribal Groups of the Nilgiris district, and
          three indigenous communities of the wider mountain system.
        </p>
      </header>

      <div className="container-site pb-20">
        <p className="font-display text-7xl font-medium leading-none">6</p>
        <p className="mt-4 max-w-reading text-mute">
          Toda, Kota, Kurumba, Irula, Paniya, and Kattunayakan. Recognised by the
          Government of India as Particularly Vulnerable Tribal Groups, and at home
          in the Nilgiris.
        </p>
        <div className="mt-10">
          {six.map((group) => (
            <GroupBlock key={group.slug} group={group} extra={group.slug === "toda"} />
          ))}
        </div>

        <p className="mt-20 font-display text-7xl font-medium leading-none">3</p>
        <p className="mt-4 max-w-reading text-mute">
          Badaga, Cholanaikan, and Kurichya. Indigenous to this landscape — the upper
          plateau, the Nilambur forests, and the Wayanad slopes — and named apart
          from the six, because their histories are not the same.
        </p>
        <div className="mt-10">
          {three.map((group) => (
            <GroupBlock key={group.slug} group={group} />
          ))}
        </div>
      </div>
    </article>
  );
}
