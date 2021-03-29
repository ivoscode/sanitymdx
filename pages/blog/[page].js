import hydrate from "next-mdx-remote/hydrate";
import renderToString from "next-mdx-remote/render-to-string";
import Image from "next/image";
import Callout from "../../components/markup/callout";
import { getSanityContent } from "../../utils/sanity";

export default function Page({ title, content, coverImage }) {
  const renderedContent = hydrate(content, {
    components: {
      Callout,
    },
  });

  return (
    <article>
      <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
        {title}
      </h1>

      <div className=" relative h-48 w-1/3  -mx-5 sm:mx-0">
        <Image
          src={coverImage}
          alt="blog image"
          layout="fill"
          objectFit="cover"
          objectPosition="center center"
        />
      </div>

      {renderedContent}
    </article>
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
      coverImage: pageData.coverImage.asset.url,
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
