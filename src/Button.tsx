import tw from "twin.macro";

interface ButtonProps {
  variant?: "primary" | "secondary";
  isSmall?: boolean;
}

export function Button({ isSmall }: ButtonProps) {
  return (
    <button css={tw`p-8 bg-blue-400`}>
      {isSmall ? "SMALL" : "LARGE"} asdf
    </button>
  );
}
