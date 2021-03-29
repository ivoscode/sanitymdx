import Afilinks from "../components/home-page/afilinks";
import FeaturedPosts from "../components/home-page/featuredPosts";
import Hero from "../components/home-page/hero";
import { getSanityContent } from "../utils/sanity";

export default function Index({ posts, hero, afilinks }) {
  return (
    <div>
      <Hero imgsource={hero.coverImage.asset.url} alt="hero picture" />
      <FeaturedPosts posts={posts} />
      <Afilinks afilinks={afilinks} />
    </div>
  );
}

export async function getStaticProps() {
  const data = await getSanityContent({
    query: `
   query AllPages {
  allHero {
    heroimage
    coverImage {
      asset {
        url
      }
    }

    content
  }
   allAfilinks {
    title
    afilink
    coverImage {
      asset {
        url
      }
    }
  }
  allBlog(where: { featured: { eq: true } }) {
   title
   coverImage {asset {url}}
   slug {current}
   content
  }
}
    `,
  });

  const hero = data.allHero[0];

  const posts = data.allBlog.map((blogpost) => ({
    title: blogpost.title,
    slug: blogpost.slug.current,
    content: blogpost.content,
    coverImage: blogpost.coverImage.asset.url,
  }));
  const afilinks = data.allAfilinks.map((afilink) => ({
    title: afilink.title,
    afilinkURL: afilink.afilink,
    coverImage: afilink.coverImage.asset.url,
  }));

  return {
    props: { hero, posts, afilinks },
  };
}
