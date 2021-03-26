import GridContainer from "../posts/grid-container";

export default function FeaturedPosts(props) {
  return (
    <section className="mt-10">
      <h2>Featured Posts</h2>
      <GridContainer posts={props.posts} />
    </section>
  );
}
