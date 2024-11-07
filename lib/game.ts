export type Move = (typeof moves)[number];

interface GameScore {
  player: number;
  opponent: number;
  roundCount: number;
}

export type RoundResult = "player" | "opponent" | "draw";

interface Round {
  playerMove: Move;
  opponentMove: Move;
  result: RoundResult;
}

export interface GameState {
  active: boolean;
  score: GameScore;
  currentRound: Round | null;
}

export const moves = ["rock", "paper", "scissors", "lizard", "spock"] as const;

export const rules: Record<Move, Move[]> = {
  scissors: ["paper", "lizard"],
  paper: ["rock", "spock"],
  rock: ["lizard", "scissors"],
  lizard: ["spock", "paper"],
  spock: ["scissors", "rock"],
};

export const initialGameState: GameState = {
  active: true,
  currentRound: null,
  score: {
    player: 0,
    opponent: 0,
    roundCount: 0,
  },
};

function getRoundResult(playerMove: Move, opponentMove: Move): RoundResult {
  if (playerMove === opponentMove) {
    return "draw";
  }

  const playerWins = rules[playerMove].includes(opponentMove);
  return playerWins ? "player" : "opponent";
}

function updateGameScore(
  currentGameScore: GameScore,
  result: RoundResult
): GameScore {
  return {
    roundCount: currentGameScore.roundCount + 1,
    player:
      result === "player"
        ? currentGameScore.player + 1
        : currentGameScore.player,
    opponent:
      result === "opponent"
        ? currentGameScore.opponent + 1
        : currentGameScore.opponent,
  };
}

export function resolveRound(
  state: GameState,
  playerMove: Move,
  opponentMove: Move
): GameState {
  if (!state.active) {
    return state;
  }

  const result = getRoundResult(playerMove, opponentMove);

  return {
    ...state,
    currentRound: {
      playerMove,
      opponentMove,
      result,
    },
    score: updateGameScore(state.score, result),
  };
}
