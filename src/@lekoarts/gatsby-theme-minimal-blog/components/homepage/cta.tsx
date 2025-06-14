import React from "react";
import { Link } from "gatsby";
import { Box } from "theme-ui";

export const CTA = ({
  text,
  to,
  gatsbyLink,
  icon
}: {
  text: string;
  to: string;
  gatsbyLink?: boolean;
  icon: React.ReactNode;
}) => (
  <Box
    as={gatsbyLink ? Link : "a"}
    {...(gatsbyLink ? { to } : { href: to })}
    className="rounded-full bg-[#14000d] leading-none shrink-0 no-underline text-[#FFADE4] text-[1.625rem] flex items-center gap-3 py-4 px-6 font-recursive-mono box-glow-xl transition ease-in-out hover:-translate-y-0.5 active:-translate-y-0.5 cursor-pointer hover:text-[#ffc4eb] hover:box-glow-xxl active:text-[#ffc4eb] active:box-glow-xxl no-tap-highlight border border-solid border-[#5c103e]"
  >
    {icon}
    {text}
  </Box>
);
