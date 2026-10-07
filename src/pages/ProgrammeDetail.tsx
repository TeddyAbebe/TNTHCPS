import { Link, useParams } from "react-router-dom";
import { Story } from "../components/Story.tsx";
import { programmes } from "../data/content.ts";
import { NotFound } from "./NotFound.tsx";

export function ProgrammeDetail() {
  const { slug } = useParams();
  const item = programmes.find((entry) => entry.slug === slug);

  if (!item) return <NotFound />;

  return (
    <Story kicker="Programmes" title={item.title} lede={item.lede} picture={item.picture}>
      {item.paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      <Link to="/programmes" className="text-link mt-4">
        All programmes
      </Link>
    </Story>
  );
}
