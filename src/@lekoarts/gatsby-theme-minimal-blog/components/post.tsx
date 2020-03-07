/** @jsx jsx */
import { jsx } from "theme-ui";
import { Heading } from "@theme-ui/components";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout";
import ItemTags from "@lekoarts/gatsby-theme-minimal-blog/src/components/item-tags";
import SEO from "@lekoarts/gatsby-theme-minimal-blog/src/components/seo";
import { DiscussionEmbed } from "disqus-react";
import DirectionProvider, {
  DIRECTIONS
} from "react-with-direction/dist/DirectionProvider";
import "katex/dist/katex.min.css";
import Language from "../../../lang";
import copyHandler from "../../../copy-tex/copy-tex";

type PostProps = {
  data: {
    post: {
      slug: string;
      title: string;
      date: string;
      tags?: {
        name: string;
        slug: string;
      }[];
      description?: string;
      body: string;
      excerpt: string;
      timeToRead: number;
      lang: string;
      banner?: {
        childImageSharp: {
          resize: {
            src: string;
          };
        };
      };
      css?: {
        relativePath: string;
      };
    };
  };
};

const px = [`32px`, `16px`, `8px`, `4px`];
const shadow = px.map(v => `rgba(0, 0, 0, 0.15) 0px ${v} ${v} 0px`);

const Post = ({ data: { post } }: PostProps) => {
  const disqusConfig = {
    shortname: "sophiasaiada",
    config: { identifier: post.slug, title: post.title }
  };
  if (post.css?.relativePath) {
    require("../../../../content/posts/" + post.css?.relativePath);
  }
  return (
    <DirectionProvider
      direction={post.lang == "he" ? DIRECTIONS.RTL : DIRECTIONS.LTR}
    >
      <Layout sx={{ mb: 4 }} lang={Language[post.lang]}>
        <SEO
          title={post.title}
          description={post.description ? post.description : post.excerpt}
          image={
            post.banner ? post.banner.childImageSharp.resize.src : undefined
          }
        />
        <Heading variant="h2" as="h2">
          {post.title}
        </Heading>
        <p
          sx={{
            color: `secondary`,
            mt: 3,
            a: { color: `secondary` },
            fontSize: [1, 1, 2]
          }}
        >
          <time>{post.date}</time>
          {post.tags && (
            <React.Fragment>
              {` — `}
              <ItemTags tags={post.tags} />
            </React.Fragment>
          )}
        </p>
        <section
          onCopy={copyHandler}
          sx={{
            my: 5
          }}
        >
          <MDXRenderer>{post.body}</MDXRenderer>
        </section>
        <DiscussionEmbed {...disqusConfig} />
      </Layout>
    </DirectionProvider>
  );
};

export default Post;
