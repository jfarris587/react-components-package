import { PropsWithChildren } from "react";
import tw from "twin.macro";

interface ButtonProps {
  variant?: "primary" | "secondary";
  isSmall?: boolean;
}

export function Button({}: PropsWithChildren<ButtonProps>) {
  return <div tw="p-8 bg-blue-400">asdf</div>;
}
