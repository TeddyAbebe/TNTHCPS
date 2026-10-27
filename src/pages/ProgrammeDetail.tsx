import { useParams } from "react-router-dom";
import { Related } from "../components/Related.tsx";
import { Story } from "../components/Story.tsx";
import { programmes, projectsFor } from "../data/content.ts";
import { NotFound } from "./NotFound.tsx";

export function ProgrammeDetail() {
  const { slug } = useParams();
  const item = programmes.find((entry) => entry.slug === slug);

  if (!item) return <NotFound />;

  return (
    <Story
      kicker="Programmes"
      title={item.title}
      lede={item.lede}
      picture={item.picture}
      back={{ to: "/programmes", label: "Programmes" }}
    >
      {item.paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      <Related
        kicker="Taken up in"
        items={projectsFor(item).map((project) => ({
          to: `/projects/${project.slug}`,
          title: project.title,
          summary: project.summary,
        }))}
      />
    </Story>
  );
}
