import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="max-w-xl mx-auto px-2 flex flex-col gap-4">
      <div className="relative aspect-square w-full max-w-[240px] mx-auto">
        <Image
          src="/images/RPSLS.webp"
          alt="Rock, Paper, Scissors, Lizard, Spock game diagram"
          fill
        />
      </div>

      <h1 className="text-3xl text-center">
        Rock, Paper, Scissors, Lizard, Spock
      </h1>

      <p className="text-md text-center">
        Try your chances in a Rock, Paper, Scissors, Lizard, Spock game against
        a computer opponent.
      </p>

      <p className="text-md text-center">
        Rules of the game are similar to the classic rock, paper, scissors with
        extra moves, and can be explained using following quote:
      </p>

      <blockquote
        className="p-3 border-l-4 bg-zinc-100 dark:bg-zinc-800 dark:border-zinc-600 text-sm text-muted-foreground"
        cite="https://bigbangtheory.fandom.com/wiki/Rock,_Paper,_Scissors,_Lizard,_Spock"
      >
        <p>Scissors cuts Paper</p>
        <p>Paper covers Rock</p>
        <p>Rock crushes Lizard</p>
        <p>Lizard poisons Spock</p>
        <p>Spock smashes Scissors</p>
        <p>Scissors decapitates Lizard</p>
        <p>Lizard eats Paper</p>
        <p>Paper disproves Spock</p>
        <p>Spock vaporizes Rock</p>
        <p>(and as it always has) Rock crushes Scissors</p>
      </blockquote>

      <Button className="self-center" size="lg" asChild>
        <Link href="/play">Play Now</Link>
      </Button>
    </div>
  );
}
