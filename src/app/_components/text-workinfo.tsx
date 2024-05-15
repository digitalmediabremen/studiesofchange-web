import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export function TextWorkinfo({ children }: Props) {
return (
    <h1 className="text-xl mb-3 leading-snug">
        {children}
    </h1>
);
}
