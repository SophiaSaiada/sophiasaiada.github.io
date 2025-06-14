import React from "react";
import { CTA } from "./homepage/cta";
import { Mail } from "lucide-react";
import { SectionTitle } from "./homepage/SectionTitle";
// import TsParticlesAnimation from "../../../../components/background";

const BottomCTA = () => (
  <section className="w-full mx-auto relative overflow-hidden">
    {/* <TsParticlesAnimation id="footer-particles" />
    <div className="h-1/2 top-0 from-transparent via-background via-25% to-background bg-gradient-to-t z-10 w-full absolute left-0" />
    <div className="h-10 bottom-0 hidden lg:block from-transparent to-background bg-gradient-to-b z-10 w-full absolute left-0" /> */}

    <div className="w-full px-4 max-lg:flex-col max-lg:text-center  text-left gap-2 max-lg:gap-6 max-lg:px-6 flex items-center justify-between py-8 pb-32 relative z-30">
      <SectionTitle>Let's code a better world together.</SectionTitle>
      <CTA
        to="/SophieSaiadaSeniorFullStackDeveloper.pdf"
        icon={<Mail className="size-7" strokeWidth={1.75} />}
        text="Contact Me"
      />
    </div>
  </section>
);

export default BottomCTA;
