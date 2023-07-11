import Link from "next/link";

export default function Footer() {
  return (
    <footer className="absolute bottom-0 flex h-8 w-full items-center justify-center bg-[--color-background-light] text-xs text-white">
      <Link className="text-secondary" href="https://LinkedIn.com/in/McAJBen">
        LinkedIn
      </Link>
      &nbsp;|&nbsp;
      <Link className="text-secondary" href="http://GitHub.com/McAJBen">
        GitHub
      </Link>
      &nbsp;|&nbsp;
      <Link className="text-secondary" href="mailto:McAJBen@gmail.com">
        Contact
      </Link>
    </footer>
  );
}
