import Link from "next/link";

type Props = {
    title: string;
    excerpt: string;
    author: string;
    slug: string;
    year: string;
};

export function Collapsed({
    title,
    excerpt,
    author,
    slug,
    year,
}: Props) {
    return (
        <div className="md:pr-10">
            <Link href={`/texts/${slug}`}>
                <h3 className="text-3xl leading-snug font-serif">
                    {author}
                </h3>
                <h4 className="text-xl mb-0 leading-snug">
                    {title}{(title) ? " | " : ""} {year}
                </h4>
            </Link>
        </div>
    );
}
