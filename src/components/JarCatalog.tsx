import { jarFamilies, type JarShape, type JarSpec } from "../data/content.ts";
import { Reveal } from "./Reveal.tsx";

const radius: Record<JarShape, string> = {
  round: "38% 38% 18% 18%",
  salsa: "46% 46% 22% 22%",
  koyna: "30% 30% 42% 42%",
  matki: "48% 48% 46% 46%",
  pickle: "16% 16% 12% 12%",
  apple: "50% 50% 42% 42%",
  straight: "12% 12% 10% 10%",
};

function GlassJar({ jar }: { jar: JarSpec }) {
  const height = 36 + (jar.heightMm / 179) * 78;
  const width = 28 + (jar.bottomMm / 106) * 36;

  return (
    <div className="flex h-36 items-end justify-center">
      <div className="flex flex-col items-center transition duration-500 group-hover:-translate-y-1">
        <div
          className="rounded-full bg-gold shadow-sm"
          style={{ width: width * 0.72, height: 8 }}
        />
        <div
          className="border border-white/70 bg-gradient-to-b from-white/50 to-white/10 shadow-inner"
          style={{
            width,
            height,
            borderRadius: radius[jar.shape],
          }}
        />
      </div>
    </div>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <p className="text-[11px] leading-relaxed text-ivory/75">
      <span className="uppercase tracking-[0.14em] text-gold/90">{label}</span> {value}
    </p>
  );
}

export function JarCatalog() {
  return (
    <div id="jars">
        {jarFamilies.map((family) => (
          <div key={family.id} className="mt-14 first:mt-0">
            <h3 className="text-center font-display text-3xl tracking-wide text-charcoal md:text-5xl">
              {family.title}
            </h3>
            <div className="mx-auto mt-4 h-px w-16 bg-gold" />
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {family.jars.map((jar, index) => (
                <Reveal key={jar.name} delay={(index % 3) * 60}>
                  <article className="group bg-forest px-5 py-6 text-ivory transition duration-300 hover:-translate-y-1 hover:bg-forest-deep">
                    <GlassJar jar={jar} />
                    <h4 className="mt-4 text-center font-sans text-sm font-medium uppercase tracking-[0.16em] text-gold">
                      {jar.name}
                    </h4>
                    <div className="mt-3 space-y-1 text-center">
                      <Spec label="Capacity" value={jar.capacity} />
                      <Spec label="Neck" value={`${jar.neckMm} mm`} />
                      <Spec label="Height" value={`${jar.heightMm} mm`} />
                      <Spec label="Bottom dia" value={`${jar.bottomMm} mm`} />
                      <Spec label="Box" value={`${jar.boxPcs} pcs`} />
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
}
