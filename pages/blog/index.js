import PostsGrid from "../../components/postsGrid";
import { getSanityContent } from "../../utils/sanity";
export default function Blog({ posts }) {
  return (
    <div>
      <PostsGrid posts={posts} />
    </div>
  );
}
export async function getStaticProps() {
  const data = await getSanityContent({
    query: `
    query AllPages {
  
  allBlog {
    title
    coverImage {asset {url}}
    slug {current}
    content
  }
}


    `,
  });

  const posts = data.allBlog.map((blogpost) => ({
    title: blogpost.title,
    slug: blogpost.slug.current,
    content: blogpost.content,
    coverImage: blogpost.coverImage.asset.url,
  }));

  return {
    props: { posts },
  };
}
