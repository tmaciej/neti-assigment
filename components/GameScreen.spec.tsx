import { afterEach, describe, expect, it, vi } from "vitest";
import { render, cleanup, fireEvent } from "@testing-library/react";
import GameScreen from "./GameScreen";
import { initialGameState, moves } from "@/lib/game";
import { getReadableMoveName } from "@/lib/utils";

describe("Game Screen component", () => {
  afterEach(cleanup);

  it.each(moves)('allows to select "%s" move', (move) => {
    const onMakeMove = vi.fn();
    const { getByRole } = render(
      <GameScreen
        gameState={initialGameState}
        onEndGame={vi.fn()}
        onMakeMove={onMakeMove}
      />
    );
    const option = getByRole("option", { name: getReadableMoveName(move) });
    fireEvent.click(option);
    expect(onMakeMove).toHaveBeenCalledWith(move);
  });

  it("allows to end the game", () => {
    const onEndGame = vi.fn();

    const { getByRole } = render(
      <GameScreen
        gameState={initialGameState}
        onEndGame={onEndGame}
        onMakeMove={vi.fn()}
      />
    );

    const button = getByRole("button", { name: "End Game" });
    fireEvent.click(button);
    expect(onEndGame).toHaveBeenCalledOnce();
  });
});
