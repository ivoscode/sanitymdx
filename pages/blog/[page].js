import hydrate from "next-mdx-remote/hydrate";
import renderToString from "next-mdx-remote/render-to-string";
import Image from "next/image";
import Callout from "../../components/markup/callout";
import { getSanityContent } from "../../utils/sanity";

export default function Page({ title, content, blogImage }) {
  const renderedContent = hydrate(content, {
    components: {
      Callout,
    },
  });

  return (
    <div>
      <h1>{title}</h1>
      <div className=" relative h-48 w-1/3 m-10">
        <Image
          src={blogImage}
          alt="blog image"
          layout="fill"
          objectFit="cover"
          objectPosition="center center"
        />
      </div>

      {renderedContent}
    </div>
  );
}

export async function getStaticProps({ params }) {
  const data = await getSanityContent({
    query: `query PageBySlug($slug: String!) {
  allBlog(where: { slug: { current: { eq: $slug } } }) {
    title
    content
    coverImage {
      asset {
        url
      }
    }
  }
}`,
    variables: {
      slug: params.page,
    },
  });

  const [pageData] = data.allBlog;

  const content = await renderToString(pageData.content, {
    components: { Callout },
  });

  return {
    props: {
      title: pageData.title,
      content,
      blogImage: pageData.coverImage.asset.url,
    },
  };
}

export async function getStaticPaths() {
  const data = await getSanityContent({
    query: `
          query AllPages {
            allBlog {
              slug {
                current
              }
            }
          }
        `,
  });

  const pages = data.allBlog;

  return {
    paths: pages.map((p) => `/blog/${p.slug.current}`),
    fallback: false,
  };
}
