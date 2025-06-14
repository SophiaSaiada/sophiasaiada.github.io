import React from "react";

import ChipsSection, { BREAK_LINE } from "./ChipsSection";

const AdditionalValues = () => (
  <ChipsSection
    title="Additional Values"
    values={[
      { name: "Independent", icon: { type: "emoji", emoji: "💪" } },
      { name: "Proactive" },
      { name: "Eye for design + UX", icon: { type: "emoji", emoji: "🎨" } },
      { name: "Intuitive Diagrams" },
      BREAK_LINE,
      {
        name: "Domain knowledge on Solar",
        icon: { type: "emoji", emoji: "☀️" }
      },
      {
        name: "Domain knowledge on Finances",
        icon: { type: "emoji", emoji: "🏦" }
      },
      BREAK_LINE,
      { name: "English (fluent)", icon: { type: "emoji", emoji: "🇺🇸" } },
      { name: "Hebrew (native)", icon: { type: "emoji", emoji: "🇮🇱" } },
      BREAK_LINE,
      { name: "+10 in Diversity", icon: { type: "emoji", emoji: "🏳️‍🌈" } },
      { name: "Good at picking places for lunch" }
    ]}
  />
);

export default AdditionalValues;
