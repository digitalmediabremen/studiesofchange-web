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

export function TextHeader({ title, subtitle, author, year, medium_type, material, dimension }: Props) {
  const meta = []
  if (author) meta.push(<TextWorkinfo>-<br/>{author}</TextWorkinfo>)
  if (year) meta.push(<TextWorkinfo>{year}<br/>-</TextWorkinfo>)
  // if (year || author) meta.push(<div className="h-5"></div>)
  if (medium_type || material || dimension) meta.push(<TextWorkinfo>
      {medium_type}<br />-<br />
      {material}<br />-<br />
      {dimension}
    </TextWorkinfo>)
  if (year || author || medium_type || material || dimension) meta.push(<div className="md:block"></div>)

  return (
    <>
      <TextTitle>{title}</TextTitle>
      {subtitle?<TextSubtitle>{subtitle}</TextSubtitle>:<></>}
      {meta}
    </>
  );
}
