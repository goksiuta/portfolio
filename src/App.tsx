import { Agentation } from "agentation";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Thoughts from "./components/Thoughts";

export default function App() {
  return (
    <>
      <main className="max-w-[920px] mx-auto px-6 py-16">
        <Header />
        <Projects />
        <Thoughts />
      </main>
      {import.meta.env.DEV && <Agentation endpoint="http://localhost:4747" />}
    </>
  );
}
