"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";

type Props = {
  pathname: "/" | "/hangman" | "/resume";
};

export default function Header(props: Props) {
  const { pathname } = props;
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = useCallback(() => {
    setIsExpanded((prev) => !prev);
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
      selected: pathname === "/hangman",
    },
    {
      name: "Resume",
      to: "/resume",
      selected: pathname == "/resume",
    },
  ];

  return (
    <div className="overflow-hidden relative">
      <div className="flex-row bg-[--color-primary] text-lg m-0 p-0 overflow-hidden block h-12">
        <div className="hidden sm:block">
          {links.map((link) => (
            <span key={link.name} className="float-left">
              <Link
                className={classNames(
                  "cursor-pointer block px-2 h-12 leading-[3rem] text-center select-none",
                  link.selected
                    ? "bg-white text-[--color-primary]"
                    : "hover:bg-white text-white hover:text-[--color-primary]"
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
            onClick={toggleExpanded}
            className="text-white inline-block cursor-pointer text-3xl h-12 leading-[3rem] w-12 text-center hover:bg-white hover:text-[--color-primary] float-left"
          >
            <span className="material-icons-round">menu</span>
          </div>
        </div>
        <div className="sm:hidden cursor-pointer inline-block px-2 h-12 leading-[3rem] text-center select-none text-lg bg-white text-[--color-primary]">
          {links.find((link) => link.selected)?.name}
        </div>
        <span className="float-right">
          <Link
            className="text-white cursor-pointer block px-2 h-12 leading-[3rem] text-center select-none hover:bg-white hover:text-[--color-primary]"
            href="/resume"
          >
            Ben McAllister
            <Image
              src="/ben.jpg"
              className="float-right h-12 w-12 p-2 rounded-full ml-2 block animate-bob-spin"
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
            className="flex-row bg-[--color-primary-dark] text-lg m-0 p-0 overflow-hidden block h-12"
          >
            <Link
              className={classNames(
                "cursor-pointer block px-2 h-12 leading-[3rem] text-center select-none",
                link.selected
                  ? "bg-white text-[--color-primary]"
                  : "hover:bg-white text-white hover:text-[--color-primary]"
              )}
              href={link.to}
            >
              {link.name}
            </Link>
          </div>
        ))}
    </div>
  );
}
