import { Thought } from "../content";
import blogImg1 from "../../assets/blog-img/Group 427318942.png";
import blogImg2 from "../../assets/blog-img/Group 427318941.png";

const post: Thought = {
  slug: "rive-marketing-template-engine",
  date: "JULY 2020",
  isoDate: "2020-07-01",
  title: "How Rive Became Our Marketing Template Engine",
  description:
    "Making sure mobile device works across all different devices available on the market. Easy way.",
  image: blogImg1,
  blogPost: {
    intro: [
      "For a long time, I had a love–hate relationship with Adobe After Effects.",
      "I loved what it could do. The polish. The control. The cinematic results.",
      "But I hated the workflow.",
      "",
      "Every small change meant re-rendering. Every new size meant duplicating compositions. Every campaign variant meant exporting the same asset 50–100 times. The results were great — but the time-to-effect was painfully high. In a high-pace startup environment, that's a serious problem.",
      "",
      "Eventually, I became the bottleneck.",
      "",
      "I was usually the only person who could handle rendering, exporting, and troubleshooting. My time was too valuable to spend pushing pixels through export queues.",
      "Something had to change.",
    ],
    sections: [
      {
        image: blogImg1,
        heading: "The Shift: From Rendered Video to Interactive Systems",
        body: [
          "That shift came with Rive.",
          "What immediately stood out was its component system — something that felt very familiar coming from Figma. Instead of thinking in rendered timelines, I started thinking in reusable systems.",
          "",
          "In After Effects, every variant meant: duplicate comp → update text → re-render → repeat.",
          "",
          "In Rive, the workflow became: create a template → expose inputs → let others generate variations.",
          "",
          "That difference is massive. It moved us from a render-on-demand model to a self-service model. Anyone on the team could now produce a polished animation by filling in a few fields.",
        ],
      },
      {
        image: blogImg2,
        heading: "Building the System",
        body: [
          "The first template we built was a product launch animation — a looping background for social ads. It had three inputs: headline text, accent color, and logo.",
          "",
          "We connected it to a simple Notion table. Marketing filled in the fields. The Rive file did the rest. We went from a 3-day turnaround to under an hour.",
          "",
          "From there we expanded the system: announcement cards, tutorial overlays, event banners. Each one built on the same reusable component structure.",
          "",
          "The result is a library that compounds in value over time. Every new template makes the next one faster to build. Every input added makes the system more flexible without increasing complexity.",
        ],
      },
    ],
  },
};

export default post;
