"use client";

import GameScreen from "@/components/GameScreen";
import ResultsScreen from "@/components/ResultsScreen";
import useRPSLS from "@/hooks/useRPSLS";

export default function PlayPage() {
  const { state, makeMove, endGame, reset } = useRPSLS();

  return (
    <div className="w-full max-w-md mx-auto px-2">
      {state.active && (
        <GameScreen
          gameState={state}
          onMakeMove={makeMove}
          onEndGame={endGame}
        />
      )}
      {!state.active && <ResultsScreen gameState={state} onRestart={reset} />}
    </div>
  );
}
