import { Agentation } from "agentation";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Thoughts from "./components/Thoughts";

export default function App() {
  return (
    <>
      <main className="max-w-[920px] mx-auto px-6 py-16">
        <div className="fade-in-section" style={{ animationDelay: "0s" }}>
          <Header />
        </div>
        <div className="fade-in-section" style={{ animationDelay: "0.15s" }}>
          <Projects />
        </div>
        <div className="fade-in-section" style={{ animationDelay: "0.3s" }}>
          <Thoughts />
        </div>
      </main>
      {import.meta.env.DEV && <Agentation endpoint="http://localhost:4747" />}
    </>
  );
}
