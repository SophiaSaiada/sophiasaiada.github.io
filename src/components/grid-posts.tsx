/** @jsx jsx */
import { jsx } from "theme-ui";
import useWindowSize from "../hooks/window-size";
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata";
import Img from "gatsby-image";
import { Link } from "gatsby";
import { Text, Grid } from "@theme-ui/components";
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes";
import "./grid-posts.css";
import HomepagePostWithBanner from "../@lekoarts/gatsby-theme-minimal-blog/components/HomepagePostWithBanner";

type ListingProps = {
  posts: HomepagePostWithBanner[];
  className?: string;
  showTags?: boolean;
  limitPostWhenSingleColumn?: boolean;
};

const Listing = ({
  posts,
  className,
  limitPostWhenSingleColumn = false
}: ListingProps) => {
  const [width, _] = useWindowSize();
  const { basePath, tagsPath } = useSiteMetadata();
  const numberOfColumns = width >= 980 ? 3 : width >= 700 ? 2 : 1;
  const multipleColumns = numberOfColumns > 1;
  const limitedPosts =
    !multipleColumns && limitPostWhenSingleColumn ? posts.slice(0, 5) : posts;

  return (
    <section sx={{ mb: [2, 3, 4] }} className={className}>
      <Grid gap={20} className="post-grid" columns={[numberOfColumns]}>
        {limitedPosts.map((post) => {
          const tags = (post.tags ?? []).map((tag) => (
            <Link
              key={tag.slug}
              to={replaceSlashes(`/${basePath}/${tagsPath}/${tag.slug}`)}
              className="post-grid--item--tag"
              style={{
                color: "white",
                marginLeft: false ? "0.5em" : "none",
                marginRight: false ? "none" : "0.5em"
              }}
            >
              {tag.name}
            </Link>
          ));

          return (
            <a
              href={post.slug}
              key={post.slug}
              className={`post-grid--item ${
                multipleColumns ? "with-image" : "without-image"
              }`}
            >
              {multipleColumns && (
                <Img
                  fluid={post.banner.childImageSharp.fluid}
                  className="post-grid--item--image"
                  style={{aspectRatio: 1.5}}
                />
              )}
              <div className="post-grid--item--content">
                {multipleColumns && tags}
                <Text as={"div"} sx={{ fontFamily: `heading`, fontSize: 2 }}>
                  {post.title}
                </Text>
                {multipleColumns || tags}
                <Text>{post.date}</Text>
              </div>
            </a>
          );
        })}
      </Grid>
    </section>
  );
};

export default Listing;
