import Header from "../components/Header";
import "./Resume.css";

export default function Resume() {
  return (
    <>
      <Header />
      <div className="resume-content">
        <iframe
          className="resume-resume"
          src="/BenMcAllisterResume.pdf"
          title="Resume"
        />
      </div>
    </>
  );
}
