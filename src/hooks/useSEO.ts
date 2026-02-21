import { useEffect } from "react";
import { Thought, bio } from "../data/content";

function setMeta(attr: string, value: string, content: string) {
  let el = document.querySelector(`meta[${attr}="${value}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, value);
    document.head.appendChild(el);
  }
  el.content = content;
}

function setCanonical(href: string) {
  let el = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.rel = "canonical";
    document.head.appendChild(el);
  }
  el.href = href;
}

function setJsonLD(data: object) {
  let el = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement("script");
    el.type = "application/ld+json";
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

export function useSEO(thought: Thought | null) {
  useEffect(() => {
    const { name, siteUrl, text } = bio;

    if (thought) {
      const url = `${siteUrl}${thought.slug}`;
      const ogImage = thought.image
        ? `${window.location.origin}${thought.image}`
        : undefined;

      document.title = `${thought.title} — ${name}`;
      setMeta("name", "description", thought.description);
      setMeta("property", "og:type", "article");
      setMeta("property", "og:title", thought.title);
      setMeta("property", "og:description", thought.description);
      setMeta("property", "og:url", url);
      if (ogImage) setMeta("property", "og:image", ogImage);
      setMeta("name", "twitter:card", ogImage ? "summary_large_image" : "summary");
      setMeta("name", "twitter:title", thought.title);
      setMeta("name", "twitter:description", thought.description);
      if (ogImage) setMeta("name", "twitter:image", ogImage);
      setCanonical(url);
      setJsonLD({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: thought.title,
        description: thought.description,
        author: { "@type": "Person", name },
        url,
        ...(ogImage ? { image: ogImage } : {}),
      });
    } else {
      const title = `${name} — Product Designer`;

      document.title = title;
      setMeta("name", "description", text);
      setMeta("property", "og:type", "website");
      setMeta("property", "og:title", title);
      setMeta("property", "og:description", text);
      setMeta("property", "og:url", siteUrl);
      setMeta("name", "twitter:card", "summary");
      setMeta("name", "twitter:title", title);
      setMeta("name", "twitter:description", text);
      setCanonical(siteUrl);
      setJsonLD({
        "@context": "https://schema.org",
        "@type": "Person",
        name,
        url: siteUrl,
        jobTitle: "Lead Product Designer",
        sameAs: ["https://github.com/goksiuta"],
      });
    }
  }, [thought]);
}
