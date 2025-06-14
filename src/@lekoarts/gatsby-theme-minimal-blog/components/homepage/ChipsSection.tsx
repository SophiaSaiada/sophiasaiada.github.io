import React from "react";
import { SectionTitle } from "./SectionTitle";

export const BREAK_LINE = Symbol();

export const CHIP_CLASS_NAME =
  "px-4 py-2 rounded-full bg-[#2d0b2d] text-[#ffdbf3] font-recursive-mono font-normal border border-solid border-[#460646] text-center flex items-center gap-3";

const ChipsSection = ({
  title,
  values
}: {
  title: string;
  values: (
    | {
        name: string;
        icon?:
          | { type: "image"; src: string }
          | { type: "emoji"; emoji: string };
      }
    | typeof BREAK_LINE
  )[];
}) => (
  <section className="w-full mx-auto lg:text-center px-4">
    <SectionTitle>{title}</SectionTitle>
    <div className="flex flex-wrap gap-y-3 gap-x-4 justify-center">
      {values.map((value, i) =>
        value === BREAK_LINE ? (
          <div key={i} className="basis-full h-0" />
        ) : (
          <div key={value.name} className={CHIP_CLASS_NAME}>
            {value.icon && (
              <div className="relative size-4 group">
                {value.icon?.type === "emoji" ? (
                  <>
                    <span className="absolute leading-4 inset-0 blur-sm select-none pointer-events-none">
                      {value.icon.emoji}
                    </span>
                    <span className="absolute leading-4 inset-0">
                      {value.icon.emoji}
                    </span>
                  </>
                ) : (
                  <>
                    <img
                      src={value.icon.src}
                      className="absolute inset-0 h-full w-full blur-sm select-none pointer-events-none"
                    />
                    <img
                      src={value.icon.src}
                      className="absolute inset-0 h-full w-full"
                    />
                  </>
                )}
              </div>
            )}
            <span>{value.name}</span>
          </div>
        )
      )}
    </div>
  </section>
);

export default ChipsSection;
