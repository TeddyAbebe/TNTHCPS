import { Link } from "react-router-dom";

export function Related({
  kicker,
  items,
}: {
  kicker: string;
  items: { to: string; title: string; summary: string }[];
}) {
  if (items.length === 0) return null;

  return (
    <div className="mt-12 border-t border-line pt-8">
      <p className="kicker">{kicker}</p>
      <ul className="mt-2 border-b border-line">
        {items.map((item) => (
          <li key={item.to} className="border-t border-line">
            <Link to={item.to} className="group block py-5">
              <span className="font-display text-3xl leading-tight group-hover:italic">{item.title}</span>
              <span className="mt-2 block max-w-reading text-sm leading-relaxed text-mute">{item.summary}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
