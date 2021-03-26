import Link from "next/link";
import { getSanityContent } from "../../utils/sanity";
export default function Blog({ pages }) {
  return (
    <div>
      <ul>
        {}
        {pages.map(({ title, slug }) => (
          <li key={slug}>
            <Link href={`/blog/${slug}`}>
              <a>{title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export async function getStaticProps() {
  const data = await getSanityContent({
    query: `
    query AllPages {
  
  allBlog {
    title
    slug {
      current
    }
    content
  }
}


    `,
  });

  const pages = data.allBlog.map((blog) => ({
    title: blog.title,
    slug: blog.slug.current,
  }));

  return {
    props: { pages },
  };
}
