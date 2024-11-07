import { RoundResult } from "@/lib/game";
import { cn } from "@/lib/utils";
import { type HTMLAttributes } from "react";

type BaseProps = Omit<HTMLAttributes<HTMLParagraphElement>, "children">;
export interface RoundResultTextProps extends BaseProps {
  roundResult: RoundResult | null;
}

function getText(roundResult: RoundResult | null): string {
  switch (roundResult) {
    case "player":
      return "You win!";
    case "opponent":
      return "Opponent wins.";
    case "draw":
      return "It's a draw.";
    default:
      return "Choose move to begin.";
  }
}

export function RoundResultText({
  className,
  roundResult,
  ...rest
}: RoundResultTextProps) {
  return (
    <p
      {...rest}
      className={cn(
        roundResult === "player" && "text-green-500",
        roundResult === "opponent" && "text-red-500",
        className
      )}
    >
      {getText(roundResult)}
    </p>
  );
}

export default RoundResultText;
