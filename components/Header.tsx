"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

type Props = {
  pathname: "/" | "/hangman" | `/hangman/${string}` | "/resume";
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
      selected: pathname.startsWith("/hangman"),
    },
    {
      name: "Resume",
      to: "/resume",
      selected: pathname.startsWith("/resume"),
    },
  ];

  return (
    <div className={styles.header_content}>
      <div className={styles.header_top_row}>
        <div className="hidden sm:block">
          {links.map((link) => (
            <span key={link.name} className={styles.header_float_left}>
              <Link className={styles.header_button_link} href={link.to}>
                {link.name}
              </Link>
            </span>
          ))}
        </div>
        <div className="sm:hidden inline-block">
          <div className={styles.header_hamburger}>
            <span onClick={toggleExpanded} className="material-icons-round">
              menu
            </span>
          </div>
        </div>
        <span className={styles.header_float_right}>
          <Link className={styles.header_button_link} href="/resume">
            Ben McAllister
            <Image
              src="/ben.jpg"
              className={styles.header_spinning_image}
              width={40}
              height={40}
              alt="ben"
            />
          </Link>
        </span>
      </div>
      {isExpanded &&
        links.map((link) => (
          <div key={link.name} className={styles.header_row}>
            <Link className={styles.header_button_link} href={link.to}>
              {link.name}
            </Link>
          </div>
        ))}
    </div>
  );
}
