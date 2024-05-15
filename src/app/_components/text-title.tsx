import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export function TextTitle({ children }: Props) {
  return (
    <h1 className="text-3xl leading-snug font-serif">
      {children}
    </h1>
  );
}
