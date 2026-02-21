import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { flushSync } from "react-dom";
import { Agentation } from "agentation";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Thoughts from "./components/Thoughts";
import BlogPost from "./components/BlogPost";
import { Thought, bio, thoughts } from "./data/content";
import { useSEO } from "./hooks/useSEO";

// Height of the avatar container in normal flow (pt-16 + h-14 + pb-5 = 64+56+20 = 140px)
const AVATAR_CONTAINER_HEIGHT = 140;

const BASE = import.meta.env.BASE_URL; // "/portfolio/"

const BackArrow = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 8H3M3 8L7 4M3 8L7 12" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function navigate(update: () => void, onDone?: () => void) {
  if ("startViewTransition" in document) {
    const t = (document as any).startViewTransition(() => flushSync(update));
    if (onDone) t.finished.then(onDone);
  } else {
    update();
    onDone?.();
  }
}

function thoughtFromPath(): Thought | null {
  const slug = window.location.pathname.slice(BASE.length).replace(/\/$/, "");
  return thoughts.find((t) => t.slug === slug) ?? null;
}

export default function App() {
  const [selectedThought, setSelectedThought] = useState<Thought | null>(thoughtFromPath);
  useSEO(selectedThought);
  const [scrolled, setScrolled] = useState(false);
  const prevScrolledRef = useRef(false);
  const avatarRef = useRef<HTMLImageElement>(null);
  const prevRectRef = useRef<DOMRect | null>(null);
  const mainRef = useRef<HTMLElement>(null);

  // Sync state → URL when thought changes
  useEffect(() => {
    const newPath = selectedThought ? `${BASE}${selectedThought.slug}` : BASE;
    if (window.location.pathname !== newPath) {
      window.history.pushState(null, "", newPath);
    }
  }, [selectedThought]);

  // Handle browser back/forward
  useEffect(() => {
    const onPopState = () => {
      const thought = thoughtFromPath();
      if (thought) {
        setSelectedThought(thought);
      } else {
        navigate(() => { window.scrollTo(0, 0); setSelectedThought(null); });
      }
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useEffect(() => {
    if (selectedThought) {
      setScrolled(false);
      prevScrolledRef.current = false;
      return;
    }
    const handler = () => {
      const nowScrolled = window.scrollY > 100;
      if (nowScrolled === prevScrolledRef.current) return;
      prevScrolledRef.current = nowScrolled;
      // Capture position before state update for FLIP animation
      prevRectRef.current = avatarRef.current?.getBoundingClientRect() ?? null;
      setScrolled(nowScrolled);
    };
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, [selectedThought]);

  const isFixed = !!selectedThought || scrolled;

  // FLIP animation: runs after DOM updates, animates avatar from old to new position
  useLayoutEffect(() => {
    const el = avatarRef.current;
    const prevRect = prevRectRef.current;
    prevRectRef.current = null;

    // Only animate for scroll transitions — page navigation uses view transitions
    if (!el || !prevRect || selectedThought) return;

    const newRect = el.getBoundingClientRect();
    const dx = prevRect.left - newRect.left;
    const dy = prevRect.top - newRect.top;

    if (Math.abs(dx) < 1 && Math.abs(dy) < 1) return;

    // Start from the old position (inverse transform)
    el.style.transition = "none";
    el.style.transform = `translate(${dx}px, ${dy}px)`;

    // Force reflow so the browser applies the starting transform
    el.getBoundingClientRect();

    // Animate to final position
    el.style.transition = "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)";
    el.style.transform = "";

    const cleanup = () => {
      el.style.transition = "";
      el.style.transform = "";
    };
    el.addEventListener("transitionend", cleanup, { once: true });
  }, [isFixed]); // eslint-disable-line react-hooks/exhaustive-deps

  const goBack = () => {
    document.querySelectorAll<HTMLElement>("[style*='view-transition-name']").forEach((el) => {
      el.style.viewTransitionName = "none";
    });
    navigate(
      () => { window.scrollTo(0, 0); setSelectedThought(null); },
      () => { mainRef.current?.focus({ preventScroll: true }); }
    );
  };

  return (
    <>
      {/*
        Single avatar element — always the same DOM node so view-transition-name
        is consistent and the browser can morph it between positions.
        When it goes fixed (leaves the flow), the content below gets
        paddingTop to compensate, keeping net layout shift at zero.
      */}
      <div
        className={
          isFixed
            ? "fixed top-8 left-9 z-50 flex items-center gap-4"
            : "max-w-[920px] mx-auto px-6 pt-16 pb-5 flex items-center gap-4"
        }
      >
        <img
          ref={avatarRef}
          src={bio.avatarUrl}
          alt={selectedThought ? "Go back to homepage" : bio.name}
          onClick={selectedThought ? goBack : undefined}
          role={selectedThought ? "button" : undefined}
          tabIndex={selectedThought ? 0 : undefined}
          onKeyDown={selectedThought ? (e) => e.key === "Enter" && goBack() : undefined}
          className={`w-14 h-14 rounded-2xl shrink-0 avatar-img${selectedThought ? " cursor-pointer hover:opacity-80 transition-opacity" : ""}`}
        />
        {selectedThought && (
          <button
            onClick={goBack}
            className="flex items-center gap-[13px] text-[16px] text-black blog-nav-btn hover:opacity-60 transition-opacity bg-white/90 backdrop-blur-xl rounded-2xl px-3 py-2 border border-white/60 shadow-sm"
          >
            <BackArrow />
            <span>All Thoughts</span>
          </button>
        )}
      </div>

      {/* Page content — paddingTop compensates when avatar is fixed so net layout shift = 0 */}
      {selectedThought ? (
        <div style={{ paddingTop: AVATAR_CONTAINER_HEIGHT }}>
          <BlogPost thought={selectedThought} />
        </div>
      ) : (
        <main
          ref={mainRef}
          tabIndex={-1}
          className="max-w-[920px] mx-auto px-6 pb-16 outline-none"
          style={{ paddingTop: scrolled ? AVATAR_CONTAINER_HEIGHT : undefined }}
        >
          <div className="fade-in-section" style={{ animationDelay: "0s" }}>
            <Header />
          </div>
          <div className="fade-in-section" style={{ animationDelay: "0.15s" }}>
            <Projects />
          </div>
          <div id="thoughts" className="fade-in-section" style={{ animationDelay: "0.3s" }}>
            <Thoughts onSelect={(t) => navigate(() => setSelectedThought(t))} />
          </div>
        </main>
      )}

      {import.meta.env.DEV && <Agentation endpoint="http://localhost:4747" />}
    </>
  );
}
