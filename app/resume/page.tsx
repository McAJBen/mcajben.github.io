import Header from "@/components/Header";

export default function Resume() {
  return (
    <main>
      <Header pathname="/resume" />
      <iframe
        className="w-full h-[calc(100vh-3rem)]"
        src="/BenMcAllisterResume.pdf"
        title="Resume"
      />
    </main>
  );
}
