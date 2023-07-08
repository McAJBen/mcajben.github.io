import Link from "next/link";
import Header from "@/components/Header";
import styles from "./styles.module.css";

export default function Home() {
  return (
    <main>
      <Header pathname="/" />
      <div className={styles.home_content}>
        <div className={styles.home_text}>
          <p>Hi. Welcome to my website!</p>
          <p>
            I&apos;m a software developer working with React among other things.
          </p>
          <p>
            Try out my{" "}
            <Link
              className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
              href="/hangman"
            >
              Hangman
            </Link>{" "}
            game!
          </p>
        </div>
      </div>
    </main>
  );
}
