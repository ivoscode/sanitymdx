import Hero from "../components/home-page/hero";
import { getSanityContent } from "../utils/sanity";

export default function Index(props) {
  const { hero } = props;

  return (
    <div>
      <Hero imgsource={hero.coverImage.asset.url} alt="hero picture" />

      <h1 className="text-4xl">
        space for featured posts and afi links with filter
      </h1>
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
  
}


    `,
  });

  const hero = data.allHero[0];

  return {
    props: { hero },
  };
}
