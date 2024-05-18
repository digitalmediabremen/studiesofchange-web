import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export function TextWorkinfo({ children }: Props) {
return (
    <h1 className="text-xl mb-1 leading-snug max-w-[500px]">
        {children}
    </h1>
);
}
