import { Thought } from "../content";
import blogImg1 from "../../assets/blog-img/Group 427318942.png";
import blogImg2 from "../../assets/blog-img/Group 427318941.png";

const post: Thought = {
  slug: "scalable-multi-device-mobile-system",
  date: "JULY 2020",
  isoDate: "2020-07-01",
  title: "Creating scalable multi-device mobile system.",
  description:
    "Making sure mobile device works across all different devices available on the market. Easy way.",
  image: blogImg2,
  blogPost: {
    intro: [
      "Designing for mobile used to mean designing for one screen. Then two. Now it means designing for hundreds of device configurations — different sizes, densities, aspect ratios, and notch placements.",
      "",
      "The old approach was to design for the most popular device and hope the edges held. That worked when the spread was narrow. It doesn't work anymore.",
      "",
      "We needed a system, not a set of artboards.",
    ],
    sections: [
      {
        image: blogImg2,
        heading: "Starting with Constraints, Not Pixels",
        body: [
          "The shift started when we stopped thinking in fixed pixel dimensions and started thinking in constraints.",
          "",
          "Instead of: 'this card is 375px wide', we asked: 'what is this card relative to?'. The answer was almost always: relative to its container, with some minimum and maximum bounds.",
          "",
          "That reframe changes everything. Components become adaptive by default. Edge cases shrink because the system accounts for them structurally, not as one-off overrides.",
          "",
          "We built our component library on top of auto-layout in Figma, then mapped those constraints directly to SwiftUI and Jetpack Compose primitives. The design file became a near-direct translation to code.",
        ],
      },
      {
        image: blogImg1,
        heading: "Testing Across the Matrix",
        body: [
          "Having a constraint-based system is necessary but not sufficient. You still need to validate it.",
          "",
          "We set up a device matrix: 6 iOS sizes × 3 Android families, covering the 90th percentile of our users. Every major screen gets tested on all of them before shipping.",
          "",
          "The wins were immediate. We caught a nav bar clipping issue on SE-class devices that would have affected 12% of our iOS users. We found a scroll bounce inconsistency on Android that caused layout shifts during momentum scroll.",
          "",
          "None of these would have surfaced in a single-device design review. The matrix made them unavoidable.",
        ],
      },
    ],
  },
};

export default post;
