import React, { PropsWithChildren } from "react";

export const SectionTitle = ({ children }: PropsWithChildren) => (
  <h2 className="font-caveat text-[3rem] text-[#ffb2e5] mb-8 tracking-[0.02em] text-center text-glow-xl">
    {children}
  </h2>
);
