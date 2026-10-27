import { Link } from "react-router-dom";
import { Figure } from "../components/Figure.tsx";
import { IndexList } from "../components/IndexList.tsx";
import { ProductVisual } from "../components/ProductVisual.tsx";
import { Reveal } from "../components/Reveal.tsx";
import { breedFacts, pictures, products, programmes, projects, projectsFor, six, three } from "../data/content.ts";
import { usePageTitle } from "../usePageTitle.ts";

export function Home() {
  usePageTitle("");

  return (
    <>
      <section className="container-site pb-16 pt-16 md:pb-20 md:pt-28">
        <p className="kicker">The Nilgiris</p>
        <h1 className="display mt-6 max-w-4xl">
          Nine indigenous communities.
          <span className="mt-2 block italic text-ink/75">Six, and three.</span>
        </h1>
        <p className="lede mt-8">
          TNTHCPS is a home for the people of these hills — an introduction,
          the programmes beside them, the project, and the ghee made from
          Toda buffalo milk.
        </p>
        <Link to="/about" className="text-link mt-10">
          Read the introduction
        </Link>
      </section>

      <Figure picture={pictures.mist} aspect="screen" edge />

      <section className="bg-forest text-ivory">
        <div className="container-site py-16 md:py-24">
          <Reveal>
            <p className="kicker text-gold">Toda buffalo</p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl font-medium leading-tight md:text-5xl">
              A few litres a day. Fat enough for ghee.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden bg-gold/25 sm:grid-cols-2 lg:grid-cols-4">
            {breedFacts.map((fact, index) => (
              <Reveal key={fact.label} delay={index * 80} className="h-full">
                <div className="flex h-full flex-col bg-forest px-5 py-7 transition duration-500 hover:bg-forest-deep">
                  <p className="font-sans text-[11px] uppercase tracking-[0.22em] text-gold">{fact.label}</p>
                  <p className="mt-4 font-display text-3xl leading-tight">{fact.value}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ivory/75">{fact.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Link
            to="/products/buffalo-milk"
            className="mt-8 inline-flex border-b border-gold/50 pb-0.5 font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-gold transition hover:border-gold"
          >
            The milk
          </Link>
          <p className="mt-6 max-w-reading text-sm leading-relaxed text-ivory/60">
            Milk figures follow a 2026 study of Toda herds under traditional care near Sandynallah, and earlier breed records of about 8.2 percent fat. The 2023 hamlet count was reported by the Sheep Breeding Research Station.
          </p>
        </div>
      </section>

      <section className="container-site grid gap-10 py-20 md:grid-cols-12 md:py-28">
        <p className="kicker md:col-span-3">About</p>
        <div className="md:col-span-8 md:col-start-5">
          <p className="font-display text-2xl leading-snug md:text-3xl">
            The hills are not a backdrop. They are grassland and shola, the buffalo,
            the hut, and the ghee that comes from that life.
          </p>
          <p className="mt-6 max-w-reading leading-relaxed text-mute">
            Nine communities shape this mountain system. Six are recognised as
            Particularly Vulnerable Tribal Groups of the Nilgiris. Three more are
            indigenous to the same landscape. The site begins there.
          </p>
          <Link to="/about/groups" className="text-link mt-8">
            The nine groups
          </Link>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="container-site py-20 md:py-28">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="kicker">About</p>
              <h2 className="mt-4 font-display text-4xl font-medium md:text-5xl">
                6 + 3
              </h2>
            </div>
            <Link to="/about/todas" className="text-link hidden sm:inline-flex">
              Todas of the Nilgiris
            </Link>
          </div>

          <div className="mt-14 grid gap-16 md:grid-cols-2">
            <div>
              <p className="font-display text-7xl font-medium leading-none md:text-8xl">6</p>
              <p className="kicker mt-4">Of the Nilgiris district</p>
              <ul className="mt-8 divide-y divide-line border-y border-line">
                {six.map((group) => (
                  <li key={group.slug}>
                    <Link
                      to={group.slug === "toda" ? "/about/todas" : "/about/groups"}
                      className="flex items-baseline justify-between gap-6 py-4 hover:italic"
                    >
                      <span className="font-display text-2xl">{group.name}</span>
                      <span className="text-sm text-mute">{group.place}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-display text-7xl font-medium leading-none md:text-8xl">3</p>
              <p className="kicker mt-4">Of the wider landscape</p>
              <ul className="mt-8 divide-y divide-line border-y border-line">
                {three.map((group) => (
                  <li key={group.slug}>
                    <Link
                      to="/about/groups"
                      className="flex items-baseline justify-between gap-6 py-4 hover:italic"
                    >
                      <span className="font-display text-2xl">{group.name}</span>
                      <span className="text-sm text-mute">{group.place}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Link to="/about/todas" className="text-link mt-10 sm:hidden">
            Todas of the Nilgiris
          </Link>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="container-site py-20 md:py-28">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <p className="kicker">Programmes</p>
              <h2 className="mt-4 max-w-xl font-display text-4xl font-medium leading-tight md:text-5xl">
                Four kinds of attention.
              </h2>
            </div>
            <Link to="/programmes" className="text-link hidden sm:inline-flex">
              All programmes
            </Link>
          </div>
          <IndexList
            items={programmes.map((item, index) => ({
              to: `/programmes/${item.slug}`,
              index: String(index + 1).padStart(2, "0"),
              title: item.title,
              summary: item.summary,
              meta: projectsFor(item).map((project) => project.title).join(" · "),
            }))}
          />
          <p className="mt-8 max-w-reading text-mute">
            A further programme can be added beside these, when the work asks for it.
          </p>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="container-site grid items-center gap-12 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-7">
            <Figure picture={projects[0].picture} />
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <p className="kicker">Project</p>
            <h2 className="mt-4 font-display text-4xl font-medium leading-tight">
              {projects[0].title}
            </h2>
            <p className="mt-5 leading-relaxed text-mute">{projects[0].summary}</p>
            <div className="mt-8 flex flex-col items-start gap-4">
              <Link to="/programmes/conservation" className="text-link">
                Conservation
              </Link>
              <Link to="/projects" className="text-link">
                All project lines
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-beige/40">
        <div className="container-site py-20 md:py-28">
          <Reveal>
            <p className="kicker">Products</p>
            <h2 className="display mt-4 max-w-3xl">Into products.</h2>
            <p className="lede mt-6">
              NERSHROF Toda buffalo ghee. Pure, traditional, and made in small batches from locally sourced milk.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product, index) => (
              <Reveal key={product.slug} delay={index * 90}>
                <Link to={`/products/${product.slug}`} className="group block">
                  <div className="overflow-hidden bg-beige">
                    <ProductVisual product={product} />
                  </div>
                  <h3 className="mt-4 font-display text-3xl transition group-hover:text-forest">{product.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mute">{product.summary}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
