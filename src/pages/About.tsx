import { Link } from "react-router-dom";
import { StitchBand } from "../components/Mark.tsx";
import { six, three } from "../data/content.ts";
import { usePageTitle } from "../usePageTitle.ts";

export function About() {
  usePageTitle("Intro");

  return (
    <article>
      <header className="container-site pb-8 pt-16 md:pt-24">
        <p className="kicker">About</p>
        <h1 className="display mt-5">Intro</h1>
      </header>

      <div className="container-site grid gap-12 pb-8 md:grid-cols-12">
        <div className="prose-quiet max-w-reading md:col-span-7">
          <p>
            TNTHCPS is a home for the indigenous communities of the Nilgiris. It is
            not a brochure for the hills. It is a place to begin with the people who
            have lived here longest — their landscapes, the work carried with them,
            and the things they make.
          </p>
          <p>
            Nine communities shape this mountain system. Six are recognised as
            Particularly Vulnerable Tribal Groups of the Nilgiris district. Three
            more are indigenous to the same hills: farmers and forest people whose
            lives are tied to this ground. Together, six and three.
          </p>
          <p>
            The work turns, in particular, on the Toda buffalo. It is a semi-wild
            hill breed with long crescent horns, kept on the upper plateau and
            confined to these hills. The milk is a few litres a day and about
            8.5 percent fat, which is why the product that leaves the mund is ghee.
          </p>
          <p>
            From here, the nine communities, a longer staying with the Toda, and the
            programmes, project, and products that sit beside them.
          </p>
        </div>
      </div>

      <div className="container-site py-10">
        <StitchBand />
        <p className="mt-4 max-w-sm text-sm leading-relaxed text-mute">
          A small mark in the manner of a counted stitch — geometry, repeated, read
          from either side.
        </p>
      </div>

      <section className="container-site border-t border-line py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-12">
          <p className="kicker md:col-span-3">Todas of the Nilgiris</p>
          <div className="md:col-span-7">
            <p className="font-display text-3xl leading-snug">
              The pastoral people of the high plateau, and the first community this
              site stays with at length.
            </p>
            <Link to="/about/todas" className="text-link mt-8">
              Read on
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="container-site py-16 md:py-20">
          <p className="kicker">Nine indigenous groups</p>
          <div className="mt-8 grid gap-x-16 md:grid-cols-2">
            <ul>
              {six.map((group) => (
                <li key={group.slug} className="border-t border-line py-3 font-display text-2xl">
                  {group.name}
                </li>
              ))}
            </ul>
            <ul>
              {three.map((group) => (
                <li key={group.slug} className="border-t border-line py-3 font-display text-2xl">
                  {group.name}
                </li>
              ))}
            </ul>
          </div>
          <Link to="/about/groups" className="text-link mt-10">
            Read the nine
          </Link>
        </div>
      </section>
    </article>
  );
}
