import Header from "../components/Header";
import LinkedInBadge from "../components/LinkedInBadge";
import "./Home.css";

export default function Home() {
  return (
    <>
      <Header />
      <div className="home-content">
        <LinkedInBadge />
        <div className="home-text">
          <p>Hi. Welcome to my website!</p>
          <p>I'm a software developer working with React among other things.</p>
          <p>
            Try out my <a href="/hangman">Hangman</a> game!
          </p>
        </div>
      </div>
    </>
  );
}
