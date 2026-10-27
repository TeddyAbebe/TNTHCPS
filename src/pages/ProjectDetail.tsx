import { useParams } from "react-router-dom";
import { Related } from "../components/Related.tsx";
import { Story } from "../components/Story.tsx";
import { programmesFor, projects } from "../data/content.ts";
import { NotFound } from "./NotFound.tsx";

export function ProjectDetail() {
  const { slug } = useParams();
  const item = projects.find((entry) => entry.slug === slug);

  if (!item) return <NotFound />;

  return (
    <Story
      kicker="Project"
      title={item.title}
      lede={item.lede}
      picture={item.picture}
      back={{ to: "/projects", label: "Projects" }}
    >
      {item.paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      <Related
        kicker="Sits with"
        items={programmesFor(item).map((programme) => ({
          to: `/programmes/${programme.slug}`,
          title: programme.title,
          summary: programme.summary,
        }))}
      />
    </Story>
  );
}
