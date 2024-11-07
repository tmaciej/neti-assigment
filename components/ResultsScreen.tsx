import { type GameState } from "@/lib/game";
import { Button } from "./ui/button";
import Link from "next/link";

export interface ResultsScreenProps {
  gameState: GameState;
  onRestart(): void;
}

export function ResultsScreen({ gameState, onRestart }: ResultsScreenProps) {
  const { score } = gameState;

  return (
    <div>
      <p className="text-2xl text-center mb-6">
        You&apos;ve played <strong>{score.roundCount}</strong> round
        {score.roundCount === 1 ? "" : "s"}, won{" "}
        <strong className="text-green-500">{score.player}</strong> of them and
        lost <strong className="text-red-500">{score.opponent}</strong>.
      </p>

      <div className="flex flex-col items-stretch gap-3">
        <Button onClick={onRestart}>Play Again</Button>
        <Button asChild variant="secondary">
          <Link href="/">Go back to home page</Link>
        </Button>
      </div>
    </div>
  );
}

export default ResultsScreen;
