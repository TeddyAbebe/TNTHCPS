import { useParams } from "react-router-dom";
import { JarCatalog } from "../components/JarCatalog.tsx";
import { Story } from "../components/Story.tsx";
import { products } from "../data/content.ts";
import { NotFound } from "./NotFound.tsx";

export function ProductDetail() {
  const { slug } = useParams();
  const item = products.find((entry) => entry.slug === slug);

  if (!item) return <NotFound />;

  return (
    <Story
      kicker="NERSHROF"
      title={item.title}
      lede={item.lede}
      picture={item.slug === "the-jar" ? undefined : item.picture}
      extra={item.slug === "the-jar" ? <JarCatalog /> : undefined}
      back={{ to: "/products", label: "Products" }}
    >
      {item.points && (
        <ul className="mb-8 grid gap-2 sm:grid-cols-2">
          {item.points.map((point) => (
            <li key={point} className="border border-line bg-beige/50 px-4 py-3 font-sans text-sm">
              {point}
            </li>
          ))}
        </ul>
      )}
      {item.paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </Story>
  );
}
