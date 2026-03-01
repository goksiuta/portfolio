// ============================================================
// Portfolio Content
// Edit this file to update bio, projects, and the thoughts list.
// To edit a blog post, open its file in src/data/posts/
// ============================================================

import avatarImg from "../assets/avatar-256.png";
import ampleLogo from "../assets/ample-logo.svg";
import l3Logo from "../assets/l3-logo.svg";
import mellowLogo from "../assets/mellow-logo.svg";

// Blog posts — each in its own file for easy editing
import claudePost from "./posts/building-with-claude-code";

export interface Project {
  name: string;
  description: string;
  icon: string;
  url?: string;
}

export interface BlogSection {
  image?: string;
  heading?: string;
  body: string[];
}

export interface BlogPost {
  intro: string[];
  sections: BlogSection[];
}

export interface Thought {
  slug: string;
  date: string;
  isoDate?: string; // ISO 8601 format for JSON-LD (e.g. "2020-07-01")
  title: string;
  description: string;
  image?: string;
  blogPost?: BlogPost;
}

export const bio = {
  name: "Greg Oksiuta",
  siteUrl: "https://goksiuta.com/",
  avatarUrl: avatarImg,
  text: "Current Lead Product Designer @ Layer3. Working on Ample, Layer3, and Mellow.",
};

export const projects: Project[] = [
  {
    name: "Ample",
    description: "A new way to amplify your money.",
    icon: ampleLogo,
    url: "http://ample.money/",
  },
  {
    name: "Layer3",
    description: "Discover onchain finance with one app.",
    icon: l3Logo,
    url: "https://app.layer3.xyz",
  },
  {
    name: "Mellow",
    description: "Parenting coach mobile app.",
    icon: mellowLogo,
    url: "https://apps.apple.com/sk/app/mellowsleep/id6636552824",
  },
];

// Add new blog posts here — create the file in src/data/posts/ first
export const thoughts: Thought[] = [
  claudePost,
];
