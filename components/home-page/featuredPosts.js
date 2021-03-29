import PostsGrid from "../postsGrid";
export default function FeaturedPosts({ posts }) {
  return (
    <div>
      <PostsGrid posts={posts} />
    </div>
  );
}
