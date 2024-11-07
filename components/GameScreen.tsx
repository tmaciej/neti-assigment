import { type Move, type GameState, moves } from "@/lib/game";
import { getReadableMoveName } from "@/lib/utils";
import GameMoveButton from "./GameMoveButton";
import RoundResultText from "./RoundResultText";
import { Button } from "./ui/button";

export interface GameScreenProps {
  gameState: GameState;
  onEndGame(): void;
  onMakeMove(move: Move): void;
}

export function GameScreen({
  gameState,
  onEndGame,
  onMakeMove,
}: GameScreenProps) {
  const { currentRound, score } = gameState;

  return (
    <div>
      <div className="flex justify-between gap-3 mb-4">
        <p>Round {score.roundCount === 0 ? "-" : score.roundCount}</p>
        <p>
          Score: <span className="text-green-500">{score.player}</span>-
          <span className="text-red-500">{score.opponent}</span>
        </p>
      </div>

      <div className="flex gap-3 mb-4">
        <div className="flex-1">
          <p className="text-center text-muted-foreground">Your move</p>
          <p className="text-center text-xl">
            {currentRound ? getReadableMoveName(currentRound.playerMove) : "-"}
          </p>
        </div>

        <div className="flex-1">
          <p className="text-center text-muted-foreground">Opponent move</p>
          <p className="text-center text-xl">
            {currentRound
              ? getReadableMoveName(currentRound.opponentMove)
              : "-"}
          </p>
        </div>
      </div>

      <RoundResultText
        className="text-center text-3xl"
        roundResult={currentRound ? currentRound.result : null}
      />

      <div className="flex flex-col gap-3 mt-6 mb-4" role="group">
        {moves.map((move) => (
          <GameMoveButton
            role="option"
            variant="secondary"
            key={move}
            move={move}
            onMakeMove={onMakeMove}
          />
        ))}
      </div>

      <div className="mt-6">
        <p className="text-sm text-center mb-2 text-muted-foreground">
          Tired of playing?
        </p>
        <Button className="w-full" onClick={onEndGame}>
          End Game
        </Button>
      </div>
    </div>
  );
}

export default GameScreen;
