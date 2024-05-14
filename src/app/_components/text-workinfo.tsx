import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export function TextWorkinfo({ children }: Props) {
return (
    <h1 className="text-md font-bold tracking-tighter leading-tight md:leading-none mb-1 md:text-left">
        {children}
    </h1>
);
}
