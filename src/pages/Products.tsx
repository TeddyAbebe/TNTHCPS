import { Link } from "react-router-dom";
import { ProductVisual } from "../components/ProductVisual.tsx";
import { Reveal } from "../components/Reveal.tsx";
import { inspirations, palette, products } from "../data/content.ts";
import { usePageTitle } from "../usePageTitle.ts";

const marks = ["Buffalo", "Hut", "Hill", "Motif"];

export function Products() {
  usePageTitle("Into products");

  return (
    <article>
      <header className="container-site pb-12 pt-16 md:pt-24">
        <p className="kicker">Products</p>
        <h1 className="display mt-5 max-w-4xl">Into products.</h1>
        <p className="lede mt-6">
          Toda buffalo ghee, under the name NERSHROF. A pure traditional product,
          from locally sourced milk, packed in clear glass with a gold lid.
        </p>
      </header>

      <section className="container-site pb-8">
        <div className="grid gap-10 border-y border-line py-10 sm:grid-cols-2 lg:grid-cols-4">
          {inspirations.map((item, index) => (
            <Reveal key={item.title} delay={index * 70}>
              <p className="font-sans text-[11px] uppercase tracking-[0.22em] text-forest">{marks[index]}</p>
              <h2 className="mt-3 font-display text-3xl">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-mute">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-site py-10">
        <p className="kicker">Colour</p>
        <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {palette.map((swatch) => (
            <li key={swatch.name} className="overflow-hidden border border-line">
              <div className="h-16" style={{ backgroundColor: swatch.hex }} />
              <p className="px-3 py-2 font-sans text-xs">{swatch.name}</p>
            </li>
          ))}
        </ul>
      </section>

      <div className="container-site grid gap-14 py-16 sm:grid-cols-2 lg:grid-cols-4 md:py-20">
        {products.map((product, index) => (
          <Reveal key={product.slug} delay={index * 80}>
            <Link to={`/products/${product.slug}`} className="group block">
              <div className="overflow-hidden bg-beige">
                <ProductVisual product={product} />
              </div>
              <p className="kicker mt-4">{String(index + 1).padStart(2, "0")}</p>
              <h2 className="mt-2 font-display text-3xl transition group-hover:text-forest">{product.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-mute">{product.summary}</p>
            </Link>
          </Reveal>
        ))}
      </div>
    </article>
  );
}
