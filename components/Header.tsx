"use client";

import { useCallback, useState } from "react";
import { MdMenu } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";

export default function Header() {
  const pathname = usePathname();
  const [isExpanded, setIsExpanded] = useState(false);

  const onToggleExpanded = useCallback(() => {
    setIsExpanded((prev) => !prev);
  }, []);

  const onClick = useCallback(() => {
    setIsExpanded(false);
  }, []);

  const links = [
    {
      name: "Home",
      to: "/",
      selected: pathname === "/",
    },
    {
      name: "Hangman",
      to: "/hangman",
      selected: pathname === "/hangman" || pathname === "/hangman/game",
    },
    {
      name: "Resume",
      to: "/resume",
      selected: pathname == "/resume",
    },
    {
      name: "Chat",
      to: "/chat",
      selected: pathname == "/chat",
    },
  ];

  return (
    <header className="absolute w-full overflow-hidden">
      <div className="m-0 block h-12 flex-row overflow-hidden bg-primary p-0 text-lg">
        <div className="hidden sm:block">
          {links.map((link) => (
            <span key={link.name} className="float-left">
              <Link
                className={classNames(
                  "block h-12 cursor-pointer select-none px-2 text-center leading-[3rem]",
                  link.selected
                    ? "bg-white text-primary"
                    : "text-white hover:bg-white hover:text-primary",
                )}
                href={link.to}
              >
                {link.name}
              </Link>
            </span>
          ))}
        </div>
        <div className="block sm:hidden">
          <div
            onClick={onToggleExpanded}
            className="float-left inline-block h-12 w-12 cursor-pointer text-center text-3xl leading-[3rem] text-white hover:bg-white hover:text-primary"
          >
            <MdMenu className="m-auto h-12" />
          </div>
        </div>
        <div className="inline-block h-12 cursor-pointer select-none bg-white px-2 text-center text-lg leading-[3rem] text-primary sm:hidden">
          {links.find((link) => link.selected)?.name}
        </div>
        <span className="float-right">
          <Link
            className="block h-12 cursor-pointer select-none px-2 text-center leading-[3rem] text-white hover:bg-white hover:text-primary"
            href="/resume"
          >
            Ben McAllister
            <Image
              src="/ben.webp"
              className="float-right ml-2 block h-12 w-12 animate-bob-spin rounded-full p-2"
              width={40}
              height={40}
              alt="ben"
            />
          </Link>
        </span>
      </div>
      {isExpanded &&
        links.map((link) => (
          <div
            key={link.name}
            className="m-0 block h-12 flex-row overflow-hidden bg-primary-600 p-0 text-lg"
          >
            <Link
              className={classNames(
                "block h-12 cursor-pointer select-none px-2 text-center leading-[3rem]",
                link.selected
                  ? "bg-white text-primary"
                  : "text-white hover:bg-white hover:text-primary",
              )}
              href={link.to}
              onClick={onClick}
            >
              {link.name}
            </Link>
          </div>
        ))}
    </header>
  );
}
