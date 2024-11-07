import { describe, expect, it } from "vitest";
import {
  GameState,
  initialGameState,
  moves,
  resolveRound,
  rules,
  type Move,
  type RoundResult,
} from "./game";

type Case = [Move, Move, RoundResult];

const drawCases = moves.map<Case>((move) => [move, move, "draw"]);
const otherCases = moves.flatMap<Case>((move) => {
  const winningMatchups = rules[move];
  const losingMatchups = moves.filter(
    (comparedMove) =>
      !winningMatchups.includes(comparedMove) && comparedMove !== move
  );
  const winningCases = winningMatchups.map<Case>((opponentMove) => [
    move,
    opponentMove,
    "player",
  ]);
  const losingCases = losingMatchups.map<Case>((opponentMove) => [
    move,
    opponentMove,
    "opponent",
  ]);

  return [...winningCases, ...losingCases];
});
const cases = [...drawCases, ...otherCases];

describe("RPSLS Game", () => {
  it.each(cases)(
    "correctly updates state when player uses %s and oponnent %s",
    (playerMove, opponentMove, expectedRoundResult) => {
      const state = resolveRound(initialGameState, playerMove, opponentMove);

      expect(state).toStrictEqual<GameState>({
        active: true,
        currentRound: {
          playerMove,
          opponentMove,
          result: expectedRoundResult,
        },
        score: {
          player: expectedRoundResult === "player" ? 1 : 0,
          opponent: expectedRoundResult === "opponent" ? 1 : 0,
          roundCount: 1,
        },
      });
    }
  );
});
