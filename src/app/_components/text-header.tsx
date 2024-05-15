import { TextTitle } from "@/app/_components/text-title";
import { TextSubtitle } from "./text-subtitle";
import { TextWorkinfo } from "./text-workinfo";

type Props = {
  title: string;
  subtitle: string;
  author: string;
  year: string;
  medium_type: string;
  material: string;
  dimension: string;
};

export function PostHeader({ title, subtitle, author, year, medium_type, material, dimension }: Props) {
  return (
    <>
      <TextTitle>{title}</TextTitle>
      {/*<TextSubtitle>{subtitle}</TextSubtitle>*/}
      <TextWorkinfo>{year}</TextWorkinfo>
      <TextWorkinfo>{author}</TextWorkinfo>
      <div className="h-10"></div>
      <TextWorkinfo>
        {medium_type}<br />
        {material}<br />
        {dimension}
      </TextWorkinfo>
      
      <div className="md:block md:mb-12"></div>
    </>
  );
}
