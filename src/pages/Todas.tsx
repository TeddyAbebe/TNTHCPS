import { Link } from "react-router-dom";
import { Figure } from "../components/Figure.tsx";
import { pictures } from "../data/content.ts";
import { usePageTitle } from "../usePageTitle.ts";

export function Todas() {
  usePageTitle("Todas of the Nilgiris");

  return (
    <article>
      <header className="container-site pb-12 pt-16 md:pt-24">
        <p className="kicker">About</p>
        <h1 className="display mt-5 max-w-4xl">Todas of the Nilgiris.</h1>
        <p className="lede mt-6">
          Pastoral people of the high plateau. The buffalo, the grassland, and an
          embroidery counted thread by thread.
        </p>
      </header>

      <Figure picture={pictures.fog} aspect="screen" edge />

      <div className="container-site grid gap-12 py-16 md:grid-cols-12 md:py-24">
        <aside className="md:col-span-3">
          <p className="kicker">On this page</p>
          <ul className="mt-4 space-y-2 font-display text-xl">
            <li>Plateau</li>
            <li>Buffalo</li>
            <li>Embroidery</li>
          </ul>
        </aside>
        <div className="prose-quiet md:col-span-7">
          <p>
            The Toda live on the upper Nilgiris, higher than the other communities
            of the district, in small hamlets known as munds. Shola forest sits in
            the hollows. The open ground between is grassland. That pairing — wood
            and grass — is the landscape their pastoral life reads.
          </p>
          <h2>Buffalo</h2>
          <p>
            The buffalo is at the centre of Toda life. Herds, dairying, and the care
            of animals are not a side occupation. They are how the plateau has been
            inhabited. The relationship is old, and it is practical: milk, ghee, and
            the daily movement of animals across grass that needs to remain grass.
          </p>
          <p>
            The breed is the Toda buffalo, confined to the Nilgiris. The horns are
            long and crescent. The coat runs from fawn to ash grey. Under
            traditional care a cow gives only a few litres a day — studies put the
            mean near 2.6 kilograms — and the milk carries about 8.5 percent fat.
            That is the milk households clarify into butter and ghee.
          </p>
          <p>
            The herd is now small. A count in 2023, across Toda hamlets, found
            fewer than a thousand buffaloes, including animals already crossed
            with other cattle. A few decades earlier the same hills were said to
            hold 15,000 to 20,000. Much of the old grazing has been planted to tea
            and wattle, or closed by boundaries the herds did not draw.
          </p>
          <h2>Embroidery</h2>
          <p>
            Toda women embroider by counting the threads of the cloth. There is no
            frame and no drawn outline. The patterns are geometric, worked in red
            and black, and fully reversible. The ceremonial shawl is the putukuli.
            The craft was registered as a geographical indication in 2013. The name
            belongs to handwork from these hills, and it should remain so when a
            piece leaves them.
          </p>
          <p>
            A longer note on the cloth itself sits with the products. What matters
            here is the sequence: the plateau first, the makers, then the thing.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-8">
            <Link to="/products/toda-embroidery" className="text-link">
              The cloth
            </Link>
            <Link to="/projects/high-grassland" className="text-link">
              The grassland project
            </Link>
            <Link to="/about/groups" className="text-link">
              All nine groups
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
