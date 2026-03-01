import { Thought } from "../content";
import pokemonImg from "../../assets/blog-img/claude-code-post-pokemon.png";
import portfolioImg from "../../assets/blog-img/claude-code-post-portfolio.png";
import thumbnailImg from "../../assets/blog-thumbnail/claude-code.png";

const post: Thought = {
  slug: "building-with-claude-code",
  date: "FEB 2026",
  isoDate: "2026-02-01",
  title: "Building With Claude Code",
  description:
    "This new portfolio started from a simple idea. I wanted to build something fully on my own, from start to finish.",
  image: thumbnailImg,
  blogPost: {
    intro: [
      "This new portfolio started from a simple idea. I wanted to build something fully on my own, from start to finish. I've been curious about Claude Code for a while, so I decided to use it for something real instead of just reading about it. No pressure. Just building.",
    ],
    sections: [
      {
        heading: "Starting Small and Getting Hooked",
        body: [
          "As a designer, I constantly see things I want to improve. There's always a smoother animation, a cleaner layout, a better flow. So instead of overthinking, I just started. I began with a beginner Claude Code tutorial. It was helpful and surprisingly fast. Within minutes I had a script that scans the internet for the newest Pokémon cards with benchmark data. It was not perfect, but it worked. And that was enough to get excited.",
          "",
          "After some tweaks and styling, it turned into my local Pokémon tracker. Every day at 8 it checks for new Pokémon cards on OLX, reads the barcode from the image, and saves the offer link plus the certificate link if it finds one. The certification API part is still manual, but that's fine for now. Small steps.",
        ],
        image: pokemonImg,
      },
      {
        heading: "Building the Portfolio",
        body: [
          "That early momentum pushed me to build the portfolio itself. I designed everything in Figma and used Figma MCP to translate the project. It works really well. Sometimes it misses tiny details, but it makes building locally much faster. The biggest difference showed up in the transitions. Smooth transitions. Elements morphing between pages. Things that used to feel heavy suddenly felt natural. It finally feels like the tools support the idea instead of slowing it down.",
        ],
      },
      {
        heading: "Tools That Made It Smoother",
        body: [
          "I also connected Agentation, which works like a visual notebook. I can point at something and say fix this, and the communication becomes much clearer. Polishing is still polishing. You fix one thing and something else shifts. That's part of the process. But finishing something end to end, exactly how you imagined it, is one of the best feelings.",
        ],
        image: portfolioImg,
      },
      {
        heading: "What's Next",
        body: [
          "On top of that, I built a small web app for myself where I track ideas and open processes straight from the dock. Once you start building tools for yourself, it's hard to stop.",
          "",
          "More soon.",
        ],
      },
    ],
  },
};

export default post;
