import {
  initialGameState,
  moves,
  resolveRound,
  type GameState,
  type Move,
} from "@/lib/game";
import { useCallback, useReducer } from "react";

interface MakeMoveAction {
  type: "make-move";
  move: Move;
}

interface ResetAction {
  type: "reset";
}

interface EndGameAction {
  type: "end-game";
}

type Action = MakeMoveAction | EndGameAction | ResetAction;

function getRandomMove(): Move {
  const index = Math.round(Math.random() * (moves.length - 1));
  return moves[index];
}

function reducer(state: GameState, action: Action): GameState {
  switch (action.type) {
    case "make-move":
      return resolveRound(state, action.move, getRandomMove());
    case "end-game":
      return {
        ...state,
        active: false,
      };
    case "reset":
      return initialGameState;
  }
}

export function useRPSLS() {
  const [state, dispatch] = useReducer(reducer, initialGameState);

  const makeMove = useCallback((move: Move) => {
    dispatch({
      type: "make-move",
      move,
    });
  }, []);

  const endGame = useCallback(() => {
    dispatch({
      type: "end-game",
    });
  }, []);

  const reset = useCallback(() => {
    dispatch({
      type: "reset",
    });
  }, []);

  return {
    state,
    makeMove,
    endGame,
    reset,
  };
}

export default useRPSLS;
