import { Text } from "@/interfaces/text";
import { TextPreview } from "./text-preview";

type Props = {
  texts: Text[];
};

export function Participants({ texts }: Props) {
  return (
    <section>
      <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
        Participants
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {texts.map((text) => (
          <TextPreview
            key={text.slug}
            title={text.title}
            year={text.year}
            author={text.author}
            slug={text.slug}
            excerpt={text.excerpt}
          />
        ))}
      </div>
    </section>
  );
}
