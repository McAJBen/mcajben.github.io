"use client";

import { useCallback, useState } from "react";
import { MdMenu } from "react-icons/md";
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
    <div className="relative overflow-hidden">
      <div className="m-0 block h-12 flex-row overflow-hidden bg-[--color-primary] p-0 text-lg">
        <div className="hidden sm:block">
          {links.map((link) => (
            <span key={link.name} className="float-left">
              <Link
                className={classNames(
                  "block h-12 cursor-pointer select-none px-2 text-center leading-[3rem]",
                  link.selected
                    ? "bg-white text-[--color-primary]"
                    : "text-white hover:bg-white hover:text-[--color-primary]"
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
            className="float-left inline-block h-12 w-12 cursor-pointer text-center text-3xl leading-[3rem] text-white hover:bg-white hover:text-[--color-primary]"
          >
            <MdMenu className="m-auto h-12" />
          </div>
        </div>
        <div className="inline-block h-12 cursor-pointer select-none bg-white px-2 text-center text-lg leading-[3rem] text-[--color-primary] sm:hidden">
          {links.find((link) => link.selected)?.name}
        </div>
        <span className="float-right">
          <Link
            className="block h-12 cursor-pointer select-none px-2 text-center leading-[3rem] text-white hover:bg-white hover:text-[--color-primary]"
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
            className="m-0 block h-12 flex-row overflow-hidden bg-[--color-primary-dark] p-0 text-lg"
          >
            <Link
              className={classNames(
                "block h-12 cursor-pointer select-none px-2 text-center leading-[3rem]",
                link.selected
                  ? "bg-white text-[--color-primary]"
                  : "text-white hover:bg-white hover:text-[--color-primary]"
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
