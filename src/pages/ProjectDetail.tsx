import { Link, useParams } from "react-router-dom";
import { Story } from "../components/Story.tsx";
import { projects } from "../data/content.ts";
import { NotFound } from "./NotFound.tsx";

export function ProjectDetail() {
  const { slug } = useParams();
  const item = projects.find((entry) => entry.slug === slug);

  if (!item) return <NotFound />;

  return (
    <Story kicker="Project" title={item.title} lede={item.lede} picture={item.picture}>
      {item.paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      <Link to="/projects" className="text-link mt-4">
        All project lines
      </Link>
    </Story>
  );
}
