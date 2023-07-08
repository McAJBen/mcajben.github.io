import Link from "next/link";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main>
      <Header pathname="/" />
      <div className="p-5 flex flex-row text-base text-[var(--color-text-white)]">
        <div className="flex flex-auto flex-col items-center">
          <p>Hi. Welcome to my website!</p>
          <p>
            I&apos;m a software developer working with React among other things.
          </p>
          <Link
            className="rounded p-2 m-2 bg-[var(--color-primary)] hover:bg-[var(--color-text-white)] text-[var(--color-text-white)] hover:text-[var(--color-primary)]"
            href="/hangman"
          >
            Try out my Hangman game!
          </Link>
        </div>
      </div>
    </main>
  );
}
