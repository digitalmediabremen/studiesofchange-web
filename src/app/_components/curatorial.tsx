import Avatar from "@/app/_components/avatar";
import Link from "next/link";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  subtitle: string;
  excerpt: string;
  author: string;
  slug: string;
};

export function Curatorial({
  title,
  subtitle, 
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <section>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
            <Link href={`/texts/${slug}`} className="hover:underline">
              {subtitle}
            </Link>
          </h3>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
          {author}
        </div>
      </div>
    </section>
  );
}
