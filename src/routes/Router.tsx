import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "../components/Loading";

const LazyHome = lazy(() => import("./Home"));
const LazyResume = lazy(() => import("./Resume"));
const LazyHangmanStart = lazy(() => import("./HangmanStart"));
const LazyHangman = lazy(() => import("./Hangman"));

export default function Router() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<LazyHome />} />
          <Route path="/resume" element={<LazyResume />} />
          <Route path="/hangman" element={<LazyHangmanStart />} />
          <Route path="/hangman/:gameId" element={<LazyHangman />} />
        </Routes>
      </Suspense>
    </>
  );
}
