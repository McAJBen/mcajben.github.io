import Link from "next/link";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header pathname="/" />
      <div className="p-5 flex flex-auto flex-col text-base text-white items-center">
        <div className="flex flex-col items-center">
          <p className="text-xl">Hi, and welcome to my website!</p>
          <Link
            className="rounded p-2 m-2 bg-[--color-primary] hover:bg-white text-white hover:text-[--color-primary]"
            href="/hangman"
          >
            Try out my Hangman game!
          </Link>
        </div>
        <div className="container flex flex-wrap justify-center gap-3">
          <div className="rounded-md p-5 max-w-md bg-[--color-background-light] border border-[--color-primary]">
            <p className="text-lg text-center block m-3">About Me</p>
            <p className="mt-5">
              I&apos;m a full time software developer from Michigan, who likes
              to have fun trying out different tools and languages.
            </p>
            <p className="mt-5">
              In fact, just this single website alone uses{" "}
              <span className="text-primary">Next.js</span> which uses{" "}
              <span className="text-primary">React</span>,{" "}
              <span className="text-primary">Typescript</span>, and{" "}
              <span className="text-primary">Tailwind</span>. This is all hosted
              using static site generation on{" "}
              <span className="text-primary">Github Pages</span>.
            </p>
            <p className="mt-5">
              The Hangman game that I linked to above is a static site, but uses
              a backend build from <span className="text-primary">Rust</span>,{" "}
              <span className="text-primary">Actix-web</span>, and{" "}
              <span className="text-primary">SQLite</span>. All of this is
              hosted on a personal <span className="text-primary">Proxmox</span>{" "}
              server using{" "}
              <span className="text-primary">Linux Containers</span> and{" "}
              <span className="text-primary">NGINX</span>.
            </p>
            <p className="mt-5">
              My resume (which is also available through this site) was created
              using <span className="text-primary">LaTeX</span> which allows me
              to use <span className="text-primary">Git</span> to keep it in
              version control.
            </p>
            <p className="mt-5">
              If you have any questions, suggestions, or just something cool you
              want to send to me, I can be contacted at{" "}
              <Link href="mailto:McAJBen@gmail.com" className="text-secondary">
                McAJBen@gmail.com
              </Link>
              .
            </p>
          </div>
          <div className="rounded-md max-w-md bg-[--color-background-light] border border-[--color-primary]">
            <Link
              href="https://github.com/McAJBen/DungeonBoard"
              className="flex flex-row"
            >
              <div className="relative h-40 w-full">
                <Image
                  className="rounded-tl-md hover:scale-150 hover:z-10 transition"
                  alt="Example image of Dungeon Board controls"
                  src="/dungeonboard_control2.webp"
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="relative h-40 w-full">
                <Image
                  className="rounded-tr-md hover:scale-150 hover:z-10 transition"
                  alt="Example image of Dungeon Board player view"
                  src="/dungeonboard_view2.webp"
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
            </Link>
            <div className="p-5 pt-1">
              <Link
                href="https://github.com/McAJBen/DungeonBoard"
                className="text-lg text-center text-secondary block m-3"
              >
                Dungeon Board
              </Link>
              <p className="mt-5">
                Application that&apos;s built to project a board game onto
                another screen. Allows you to show maps and other images with
                dynamic fog of war.
              </p>
              <p className="mt-5">
                Built using <span className="text-primary">Java</span> and later
                using <span className="text-primary">Kotlin</span>, this
                application can run on any computer that has Java installed. My
                Dungeons and Dragons group used this to play on an old TV.
              </p>
              <p className="content-center"></p>
            </div>
          </div>
          <div className="rounded-md max-w-md bg-[--color-background-light] border border-[--color-primary]">
            <div className="p-5 pt-1">
              <Link
                href="https://github.com/McAJBen/advent_of_code"
                className="text-lg text-center text-secondary block m-3"
              >
                Advent of Code
              </Link>
              <p className="mt-5">
                Github project to solve Advent of Code in{" "}
                <span className="text-primary">Rust</span>. My goal is to create
                optimized code so that each year can be solved in a matter of
                minutes.
              </p>
              <p className="mt-5 bg-black mx-3">
                <code>
                  year2022 day12 part1: 1.5188ms <br />
                  year2022 day12 part2: 1.5564ms <br />
                  year2022 day13 part1: 795.3µs <br />
                  year2022 day13 part2: 1.6132ms <br />
                  year2022 day14 part1: 410.8µs <br />
                  year2022 day14 part2: 5.4247ms <br />
                  ...
                </code>
              </p>
            </div>
          </div>
          <div className="rounded-md max-w-md bg-[--color-background-light] border border-[--color-primary]">
            <Link
              href="https://github.com/McAJBen/MinesweeperAI"
              className="flex flex-row"
            >
              <div className="relative h-40 w-full">
                <Image
                  className="rounded-t-md hover:scale-150 hover:z-10 transition"
                  alt="Example minesweeper grid with highlighted cells"
                  src="/minesweeperai_Example1.webp"
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
            </Link>
            <div className="p-5 pt-1">
              <Link
                href="https://github.com/McAJBen/MinesweeperAI"
                className="text-lg text-center text-secondary block m-3"
              >
                Minesweeper AI
              </Link>
              <p className="mt-5">
                Minesweeper game built with{" "}
                <span className="text-primary">Java</span> that can also play
                against itself.
              </p>
              <p className="mt-5">
                Using linear algebra, this &quot;AI&quot; can calculate the
                probability of any square being mine, and reveal the board in
                the safest way possible.
              </p>
            </div>
          </div>
          <div className="rounded-md max-w-md bg-[--color-background-light] border border-[--color-primary]">
            <Link
              href="https://github.com/McAJBen/TriangleConverter"
              className="flex flex-row"
            >
              <div className="relative h-40 w-full">
                <Image
                  className="rounded-tl-md hover:scale-150 hover:z-10 transition"
                  alt="Color wheel image recreated with triangles"
                  src="/triangleconverter_hue.webp"
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="relative h-40 w-full">
                <Image
                  className="rounded-tr-md hover:scale-150 hover:z-10 transition"
                  alt="Starry Night image recreated with triangles"
                  src="/triangleconverter_starrynight.webp"
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
            </Link>
            <div className="p-5 pt-1">
              <Link
                href="https://github.com/McAJBen/TriangleConverter"
                className="text-lg text-center text-secondary block m-3"
              >
                Triangle Converter
              </Link>
              <p className="mt-5">
                Image processor that will take any image, and reproduce it with
                only triangles.
              </p>
              <p className="mt-5">
                This uses a simple brute force algorithm in{" "}
                <span className="text-primary">Java</span> that runs on parallel
                threads.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
