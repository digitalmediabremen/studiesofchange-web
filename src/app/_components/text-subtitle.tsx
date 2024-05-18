import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export function TextSubtitle({ children }: Props) {
return (
    <h1 className="text-2xl leading-snug mt-5 italic">
        {children}
    </h1>
);
}
