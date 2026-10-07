import type { Entry } from "../data/content.ts";

function Jar() {
  return (
    <div className="flex aspect-[4/5] items-center justify-center bg-beige">
      <div className="animate-float flex w-36 flex-col items-center sm:w-40">
        <div className="h-5 w-24 rounded-full bg-gold shadow-sm" />
        <div className="h-3 w-16 bg-gold/80" />
        <div className="relative flex h-48 w-full flex-col items-center justify-center overflow-hidden rounded-b-[2rem] rounded-t-md border border-gold/50 bg-ivory shadow-inner">
          <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-gold/30 to-transparent" />
          <div className="relative z-10 flex h-28 w-24 flex-col items-center justify-center rounded-sm bg-forest text-ivory">
            <span className="font-sans text-[9px] tracking-[0.22em]">NERSHROF</span>
            <span className="mt-1 font-display text-3xl leading-none">Ghee</span>
            <span className="mt-1 px-2 text-center font-sans text-[8px] uppercase tracking-[0.14em] text-gold">
              A pure traditional product
            </span>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-3 bg-[repeating-linear-gradient(90deg,#8E342E_0_6px,#1C1916_6px_10px,#F7F1E6_10px_14px)]" />
        </div>
      </div>
    </div>
  );
}

export function ProductVisual({ product }: { product: Entry }) {
  if (product.slug === "toda-buffalo-ghee") return <Jar />;
  if (product.slug === "the-jar") return <Jar />;

  return (
    <img
      src={product.picture.src}
      alt={product.picture.alt}
      className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-[1.04]"
    />
  );
}
