import Link from "next/link";

type Props = {
  title: string;
  excerpt: string;
  author: string;
  slug: string;
  year: string;
};

export function TextPreview({
  title,
  excerpt,
  author,
  slug,
  year,
}: Props) {
  return (
    <div>
      <Link href={`/texts/${slug}`} className="hover:underline">
        <h3 className="text-3xl leading-snug">
          {title}
        </h3>
        <h4 className="text-xl mb-3 leading-snug">
          {year}
        </h4>
        <p className="text-xl leading-relaxed mb-4">{author}</p>
        <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      </Link>
    </div>
  );
}
