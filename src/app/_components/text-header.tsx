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
      <TextSubtitle>{subtitle}</TextSubtitle>
      <TextWorkinfo>{year}</TextWorkinfo>
      <TextWorkinfo>{medium_type}</TextWorkinfo>
      <TextWorkinfo>{material}</TextWorkinfo>
      <TextWorkinfo>{dimension}</TextWorkinfo>
      <div className="text-xl font-bold mt-6">{author}</div>
      <div className="md:block md:mb-12"></div>
    </>
  );
}
