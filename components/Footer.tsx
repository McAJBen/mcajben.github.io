import Link from "next/link";

export default function Footer() {
  return (
    <footer className="absolute bottom-0 flex h-8 w-full items-center justify-center bg-primary-800 text-xs text-white">
      <Link
        className="text-link hover:underline"
        href="https://LinkedIn.com/in/McAJBen"
      >
        LinkedIn
      </Link>
      &nbsp;|&nbsp;
      <Link
        className="text-link hover:underline"
        href="http://GitHub.com/McAJBen"
      >
        GitHub
      </Link>
      &nbsp;|&nbsp;
      <Link
        className="text-link hover:underline"
        href="mailto:McAJBen@gmail.com"
      >
        Contact
      </Link>
    </footer>
  );
}
