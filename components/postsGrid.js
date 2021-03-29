import Image from "next/image";
import Link from "next/link";
export default function PostsGrid({ posts }) {
  if (!posts) {
    return <h1>Posts loading</h1>;
  }
  return (
    <ul className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-10 lg:gap-x-16 ">
      {posts.map((post) => {
        const trimmedContent = `${post.content.substring(0, 160)} ${"..."}`;

        return (
          <li key={post.title}>
            <Link href={`/blog/${post.slug}`}>
              <a>
                <div className="shadow-small hove:shadow-medium transition-shadow duration-200 ">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    width={300}
                    height={200}
                    layout="responsive"
                  />
                </div>
                <h3 className="text-3xl leading-snug hover:underline">
                  {post.title}
                </h3>
                <p className="text-lg leading-relaxed">{trimmedContent}</p>
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
