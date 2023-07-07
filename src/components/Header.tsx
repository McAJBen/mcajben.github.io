import { useCallback, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useWindowSize } from "../hooks/Hooks";
import "./Header.css";

export default function Header() {
  const { pathname } = useLocation();
  const size = useWindowSize();
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

  let linkItems: JSX.Element;
  if (size.width > 450) {
    linkItems = (
      <>
        {links.map((link) => (
          <span key={link.name} className="header-float-left">
            <Link className="header-button-link" to={link.to}>
              {link.name}
            </Link>
          </span>
        ))}
      </>
    );
  } else {
    linkItems = (
      <span
        onClick={toggleExpanded}
        className="material-icons-round header-hamburger"
      >
        menu
      </span>
    );
  }

  return (
    <div className="header-content">
      <div className="header-top-row">
        {linkItems}
        <span className="header-float-right">
          <Link className="header-button-link" to="/resume">
            Ben McAllister
            <img src="/ben.jpg" className="header-spinning-image" alt="ben" />
          </Link>
        </span>
      </div>
      {isExpanded &&
        links.map((link) => (
          <div key={link.name} className="header-row">
            <Link className="header-button-link" to={link.to}>
              {link.name}
            </Link>
          </div>
        ))}
    </div>
  );
}
