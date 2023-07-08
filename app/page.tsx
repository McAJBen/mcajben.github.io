import Link from "next/link";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main>
      <Header pathname="/" />
      <div className="p-5 flex flex-row text-base text-white justify-center">
        <div className="flex flex-auto flex-col max-w-xl">
          <div className="flex flex-col items-center">
            <p>Hi, and welcome to my website!</p>
            <Link
              className="rounded p-2 m-2 bg-[--color-primary] hover:bg-white text-white hover:text-[--color-primary]"
              href="/hangman"
            >
              Try out my Hangman game!
            </Link>
          </div>
          <div>
            <p className="my-5">
              I&apos;m a full time software developer from Michigan, who likes
              to have fun trying out different tools and languages.
            </p>
            <p className="my-5">
              In fact, just this single website alone uses{" "}
              <span className="text-blue-400">Next.js</span> which uses{" "}
              <span className="text-blue-400">React</span>,{" "}
              <span className="text-blue-400">Typescript</span>, and{" "}
              <span className="text-blue-400">Tailwind</span>. This is all
              hosted using static site generation on{" "}
              <span className="text-blue-400">Github Pages</span>.
            </p>
            <p className="my-5">
              The Hangman game that I linked to above is a static site, but uses
              a backend build from <span className="text-blue-400">Rust</span>,{" "}
              <span className="text-blue-400">Actix-web</span>, and{" "}
              <span className="text-blue-400">SQLite</span>. All of this is
              hosted on a personal{" "}
              <span className="text-blue-400">Proxmox</span> server using{" "}
              <span className="text-blue-400">Linux Containers</span> and{" "}
              <span className="text-blue-400">NGINX</span>.
            </p>
            <p className="my-5">
              My resume (which is also available through this site) was created
              using <span className="text-blue-400">LaTeX</span> which allows me
              to use <span className="text-blue-400">Git</span> to keep it in
              version control.
            </p>
            <p className="my-5">
              If you have any questions, suggestions, or just something cool you
              want to send to me, I can be contacted at{" "}
              <Link
                href="mailto:McAJBen@gmail.com"
                className="text-[--color-primary-light]"
              >
                McAJBen@gmail.com
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
