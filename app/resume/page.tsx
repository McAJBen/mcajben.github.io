import Header from "@/components/Header";

export default function Resume() {
  return (
    <main>
      <Header pathname="/resume" />
      <iframe
        className="h-[calc(100vh-3rem)] w-full"
        src="/BenMcAllisterResume.pdf"
        title="Resume"
      />
    </main>
  );
}
