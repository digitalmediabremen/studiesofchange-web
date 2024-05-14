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
        <h3 className="text-3xl mb-3 leading-snug">
          {title}({year})
        </h3>
        <p className="text-xl leading-relaxed mb-4">{author}</p>
        <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      </Link>
    </div>
  );
}
