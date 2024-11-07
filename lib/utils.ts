import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { type Move } from "./game";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getReadableMoveName(move: Move): string {
  if (!move) {
    return "";
  }

  return move.charAt(0).toUpperCase() + move.slice(1);
}
