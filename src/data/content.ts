// ============================================================
// Portfolio Content
// Edit this file to update all text, projects, and blog posts.
// ============================================================

import avatarImg from "../assets/avatar-256.png";
import ampleLogo from "../assets/ample-logo.svg";
import l3Logo from "../assets/l3-logo.svg";
import mellowLogo from "../assets/mellow-logo.svg";
import blogImg1 from "../assets/blog-img/Group 427318942.png";
import blogImg2 from "../assets/blog-img/Group 427318941.png";

export interface Project {
  name: string;
  description: string;
  icon: string;
  url?: string;
}

export interface Thought {
  date: string;
  title: string;
  description: string;
  image?: string;
  url?: string;
}

export const bio = {
  avatarUrl: avatarImg,
  text: "Current Lead Product Designer @ Layer3. Founder of Talebook–research repository app.",
};

export const projects: Project[] = [
  {
    name: "Ample",
    description: "A new way to amplify your money.",
    icon: ampleLogo,
    url: "#",
  },
  {
    name: "Layer3",
    description: "Discover onchain finance with one app.",
    icon: l3Logo,
    url: "#",
  },
  {
    name: "Mellow",
    description: "Parenting coach mobile app.",
    icon: mellowLogo,
    url: "#",
  },
];

export const thoughts: Thought[] = [
  {
    date: "JULY 2020",
    title: "Using Rive to create an organization wide assets engine.",
    description:
      "Making sure mobile device works across all different devices available on the market. Easy way.",
    image: blogImg1,
    url: "#",
  },
  {
    date: "JULY 2020",
    title: "Creating scalable multi-device mobile system.",
    description:
      "Making sure mobile device works across all different devices available on the market. Easy way.",
    image: blogImg2,
    url: "#",
  },
];
