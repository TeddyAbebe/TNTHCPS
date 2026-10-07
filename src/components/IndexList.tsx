import { Link } from "react-router-dom";

export type IndexItem = {
  to: string;
  index: string;
  title: string;
  summary: string;
};

export function IndexList({ items }: { items: IndexItem[] }) {
  return (
    <div className="border-b border-line">
      {items.map((item) => (
        <Link key={item.to} to={item.to} className="group index-row">
          <span className="font-display text-lg text-mute md:col-span-1">{item.index}</span>
          <span className="font-display text-[1.85rem] leading-tight md:col-span-4">{item.title}</span>
          <span className="leading-relaxed text-mute md:col-span-6">{item.summary}</span>
          <span className="font-display text-xl transition-transform group-hover:translate-x-1 md:col-span-1 md:text-right">
            →
          </span>
        </Link>
      ))}
    </div>
  );
}
