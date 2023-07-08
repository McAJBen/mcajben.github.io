import Header from "@/components/Header";
import styles from "./styles.module.css";

export default function Resume() {
  return (
    <main>
      <Header pathname="/resume" />
      <div className={styles.resume_content}>
        <iframe
          className={styles.resume_resume}
          src="/BenMcAllisterResume.pdf"
          title="Resume"
        />
      </div>
    </main>
  );
}
