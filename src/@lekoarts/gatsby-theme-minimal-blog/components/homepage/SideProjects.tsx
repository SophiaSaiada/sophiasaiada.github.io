import React from "react";
import { useProjectsAndPosts } from "../hooks/useProjectsAndPosts";
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config";
import { SectionTitle } from "./SectionTitle";
import { Box } from "theme-ui";
import { CHIP_CLASS_NAME } from "./ChipsSection";

const SideProjects = () => {
  const { basePath } = useMinimalBlogConfig();
  const { projects } = useProjectsAndPosts();

  return (
    <section className="w-full mx-auto px-4 ">
      <SectionTitle>Side Projects</SectionTitle>
      <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 py-12 text-left`}>
        {projects.map(({ url, image, name, background, description, tags }) => (
          <div
            key={url}
            className="rounded-xl text-white bg-[#1a001a]/80 border border-[#ffb2e5]/30 flex flex-col overflow-hidden"
          >
            {image && (
              <img
                src={`${basePath}project-images/${image}`}
                className="w-full aspect-[3/2] object-cover"
                style={{ minHeight: 180 }}
                alt={name}
              />
            )}
            <div
              className="p-6 flex flex-col gap-2 flex-1"
              style={{ background }}
            >
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-caveat no-underline mt-0 text-white text-[2.25rem] mb-2 leading-tight"
              >
                {name}
              </a>

              <Box
                className="text-base font-recursive-mono leading-7 mb-2"
                dangerouslySetInnerHTML={{
                  __html: description
                    .split("\n")
                    .filter((l) => l.trim())
                    .map((l) => l.trimStart())
                    .join("\n")
                }}
                sx={{
                  a: {
                    color: `#f87ccf`,
                    textDecoration: `none`,
                    ":hover": {
                      color: `#ffdbf3`,
                      textDecoration: `underline`
                    },
                    ":focus": {
                      color: `#ffdbf3`
                    }
                  }
                }}
              />

              <div className="flex flex-wrap gap-2 mt-auto">
                {tags &&
                  tags.map((tag) => (
                    <span
                      key={tag}
                      className={`${CHIP_CLASS_NAME} bg-black/30 border-black/60 text-white`}
                    >
                      {tag}
                    </span>
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SideProjects;
