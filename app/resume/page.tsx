import Header from "@/components/Header";

export default function Resume() {
  return (
    <main>
      <Header pathname="/resume" />
      <div className="p-0">
        <iframe
          className="w-full h-[calc(100vh-50px)]"
          src="/BenMcAllisterResume.pdf"
          title="Resume"
        />
      </div>
    </main>
  );
}
