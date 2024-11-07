import { type Move } from "@/lib/game";
import { getReadableMoveName } from "@/lib/utils";
import { MouseEventHandler, useCallback, type ComponentProps } from "react";
import { Button } from "./ui/button";

type BaseProps = Omit<ComponentProps<typeof Button>, "children">;
export interface GameMoveButtonProps extends BaseProps {
  move: Move;
  onMakeMove?(move: Move): void;
}

export function GameMoveButton({
  move,
  onClick,
  onMakeMove,
  ...rest
}: GameMoveButtonProps) {
  const handleClick = useCallback<MouseEventHandler<HTMLButtonElement>>(
    (event) => {
      onClick?.(event);
      onMakeMove?.(move);
    },
    [move, onClick, onMakeMove]
  );

  return (
    <Button {...rest} onClick={handleClick}>
      {getReadableMoveName(move)}
    </Button>
  );
}

export default GameMoveButton;
