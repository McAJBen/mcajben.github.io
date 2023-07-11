import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-auto flex-col items-center p-5 text-base text-white">
      <div className="flex flex-col items-center">
        <p className="text-xl">Hi, and welcome to my website!</p>
        <Link
          className="m-2 rounded bg-[--color-primary] p-2 text-white hover:bg-white hover:text-[--color-primary]"
          href="/hangman"
        >
          Try out my Hangman game!
        </Link>
      </div>
      <div className="container flex flex-wrap justify-center gap-3">
        <div className="max-w-md rounded-md border border-[--color-primary] bg-[--color-background-light] p-5">
          <p className="m-3 block text-center text-lg">About Me</p>
          <p className="mt-5">
            I&apos;m a full time software developer from Michigan, who likes to
            have fun trying out different tools and languages.
          </p>
          <p className="mt-5">
            In fact, just this single website alone uses{" "}
            <span className="text-primary">Next.js</span>,{" "}
            <span className="text-primary">React</span>,{" "}
            <span className="text-primary">Typescript</span>, and{" "}
            <span className="text-primary">Tailwind</span>. This is all hosted
            using static site generation on{" "}
            <span className="text-primary">Github Pages</span>.
          </p>
          <p className="mt-5">
            The Hangman game that I linked to above is part of this static site,
            but uses a backend built with{" "}
            <span className="text-primary">Rust</span>,{" "}
            <span className="text-primary">Actix-web</span>, and{" "}
            <span className="text-primary">SQLite</span>. All of this is hosted
            on a personal <span className="text-primary">Proxmox</span> server
            using <span className="text-primary">Linux Containers</span> and{" "}
            <span className="text-primary">NGINX</span>.
          </p>
          <p className="mt-5">
            My resume (which is also available through this site) was created
            using <span className="text-primary">LaTeX</span> which allows me to
            use <span className="text-primary">Git</span> to keep it in version
            control.
          </p>
        </div>
        <div className="max-w-md rounded-md border border-[--color-primary] bg-[--color-background-light]">
          <Link
            href="https://github.com/McAJBen/DungeonBoard"
            className="flex flex-row"
          >
            <div className="relative h-40 w-full">
              <Image
                className="rounded-tl-md transition hover:z-10 hover:scale-150 hover:rounded-none"
                alt="Example image of Dungeon Board controls"
                src="/dungeonboard_control2.webp"
                fill
              />
            </div>
            <div className="relative h-40 w-full">
              <Image
                className="rounded-tr-md transition hover:z-10 hover:scale-150 hover:rounded-none"
                alt="Example image of Dungeon Board player view"
                src="/dungeonboard_view2.webp"
                fill
              />
            </div>
          </Link>
          <div className="p-5 pt-1">
            <Link
              href="https://github.com/McAJBen/DungeonBoard"
              className="m-3 block text-center text-lg text-secondary"
            >
              Dungeon Board
            </Link>
            <p className="mt-5">
              Application that&apos;s built to project a board game onto another
              screen. Allows you to show maps and other images with dynamic fog
              of war.
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
        <div className="max-w-md rounded-md border border-[--color-primary] bg-[--color-background-light]">
          <div className="p-5 pt-1">
            <Link
              href="https://github.com/McAJBen/advent_of_code"
              className="m-3 block text-center text-lg text-secondary"
            >
              Advent of Code
            </Link>
            <p className="mt-5">
              Github project to solve Advent of Code in{" "}
              <span className="text-primary">Rust</span>. My goal is to create
              optimized code so that each year can be solved in a matter of
              minutes.
            </p>
            <p className="mx-3 mt-5 bg-black">
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
        <div className="max-w-md rounded-md border border-[--color-primary] bg-[--color-background-light]">
          <Link
            href="https://github.com/McAJBen/MinesweeperAI"
            className="flex flex-row"
          >
            <div className="relative h-40 w-full">
              <Image
                className="rounded-t-md transition hover:z-10 hover:scale-150 hover:rounded-none"
                alt="Example minesweeper grid with highlighted cells"
                src="/minesweeperai_Example1.webp"
                fill
              />
            </div>
          </Link>
          <div className="p-5 pt-1">
            <Link
              href="https://github.com/McAJBen/MinesweeperAI"
              className="m-3 block text-center text-lg text-secondary"
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
              probability of any square being mine, and reveal the board in the
              safest way possible.
            </p>
          </div>
        </div>
        <div className="max-w-md rounded-md border border-[--color-primary] bg-[--color-background-light]">
          <Link
            href="https://github.com/McAJBen/TriangleConverter"
            className="flex flex-row"
          >
            <div className="relative h-40 w-full">
              <Image
                className="rounded-tl-md transition hover:z-10 hover:scale-150 hover:rounded-none"
                alt="Color wheel image recreated with triangles"
                src="/triangleconverter_hue.webp"
                fill
              />
            </div>
            <div className="relative h-40 w-full">
              <Image
                className="rounded-tr-md transition hover:z-10 hover:scale-150 hover:rounded-none"
                alt="Starry Night image recreated with triangles"
                src="/triangleconverter_starrynight.webp"
                fill
              />
            </div>
          </Link>
          <div className="p-5 pt-1">
            <Link
              href="https://github.com/McAJBen/TriangleConverter"
              className="m-3 block text-center text-lg text-secondary"
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
  );
}
