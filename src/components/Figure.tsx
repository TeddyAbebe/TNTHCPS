import type { Picture } from "../data/content.ts";

type Aspect = "wide" | "tall" | "screen";

const aspectClass: Record<Aspect, string> = {
  wide: "aspect-[16/10]",
  tall: "aspect-[4/5]",
  screen: "h-[68vh] min-h-[28rem]",
};

export function Figure({
  picture,
  aspect = "wide",
  edge = false,
}: {
  picture: Picture;
  aspect?: Aspect;
  edge?: boolean;
}) {
  return (
    <figure className={edge ? "" : ""}>
      <div className="overflow-hidden bg-paper-2">
        <img
          src={picture.src}
          alt={picture.alt}
          className={`${aspectClass[aspect]} w-full object-cover`}
        />
      </div>
      <figcaption className={`mt-3 text-mute ${edge ? "container-site" : ""}`}>
        <span className="font-sans text-[11px] font-medium uppercase tracking-[0.22em]">
          {picture.caption}
        </span>
        <span className="mt-1 block font-display text-sm italic">{picture.credit}</span>
      </figcaption>
    </figure>
  );
}
