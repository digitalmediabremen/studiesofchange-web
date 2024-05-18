import { Text } from "@/interfaces/text";
import { TextPreview } from "./text-preview";
import { Collapsed } from "./collapsed";


type Props = {
  texts: Text[];
};

export function Participants({ texts }: Props) {
  return (
    <section>
      <h2 className="mb-8 text-5xl md:text-7xl leading-tight">
        Participants
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-20 mb-32">
        {
          texts.map((text) => (
            <Collapsed
              key={text.slug}
              title={text.title}
              year={text.year}
              author={text.author}
              slug={text.slug}
              excerpt={text.excerpt}
            />
          ))
        }
          {/* <TextPreview
            key={text.slug}
            title={text.title}
            year={text.year}
            author={text.author}
            slug={text.slug}
            excerpt={text.excerpt}
          /> */}

      </div>
    </section>
  );
}
