import { moves } from "@/lib/game";
import { test, expect } from "@playwright/test";

test("should be able to play a game of rock, paper, scissors, lizard, spock", async ({
  page,
}) => {
  // Start from the home
  await page.goto("/");

  // Find the play button and press it
  await page.getByRole("link", { name: "Play Now" }).click();

  // Should navigate to the play page
  await expect(page).toHaveURL("/play");

  // Play every move
  for (const move of moves) {
    await page.getByRole("option", { name: move }).click();
  }

  // End the game
  await page.getByRole("button", { name: "End Game" }).click();

  // Expect to see summary of the game
  const resultRegexp = `You've played ${moves.length} rounds, won \\d{1,} of them and lost \\d{1,}`;
  await expect(page.getByText(new RegExp(resultRegexp))).toBeVisible();
});
