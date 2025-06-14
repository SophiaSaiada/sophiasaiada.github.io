import React from "react";
import SpotlightCard from "./SpotlightCard";
import { SectionTitle } from "./SectionTitle";

const highlights = [
  {
    image: "/images/graduation.png",
    title: "Bachelor of Computer Science",
    subtitle:
      "2014- 2019 → During high school\n96.7 average → Dean's Choice\nNetanya Academic College"
  },
  {
    image: "/images/feezback.png",
    title: "4½ years on a Fintech - FeezBack",
    subtitle:
      "Right-hand to the CTO\nKey role during startup pivot\nWorked with the leading financial institutions"
  },
  {
    image: "/images/rhino.jpeg",
    title: "1½ years on a Solar Fintech - Rhino Eco",
    subtitle: "Doing good at Rhino Eco\nblah blah blah"
  }
];

const Highlights = () => (
  <section className="w-full mx-auto lg:text-center px-4 ">
    <SectionTitle>The Highlights</SectionTitle>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 text-left">
      {highlights.map((h, i) => (
        <SpotlightCard
          key={i}
          className="relative rounded-xl border border-solid border-[#321715]  shadow-lg overflow-hidden px-0 py-0  bg-[url('/images/highlight-bg.png')] bg-cover transition hover:brightness-125 duration-700 ease-in-out"
          spotlightColor="rgba(255, 80, 255, 0.25)"
        >
          <div className="flex flex-col items-start z-10 relative">
            <img
              src={h.image}
              alt={h.title}
              className="w-full"
              draggable={false}
            />
            <div className="w-full px-6 py-6 flex flex-col items-start">
              <h3 className="font-caveat mt-0 text-[2.25rem] text-[#ffdbf3] mb-2 leading-tight">
                {h.title}
              </h3>
              <p className="font-recursive-mono text-[2.25rem] text-[#ffdbf3] whitespace-pre-line leading-[1.6]">
                {h.subtitle}
              </p>
            </div>
          </div>
        </SpotlightCard>
      ))}
    </div>
  </section>
);

export default Highlights;
