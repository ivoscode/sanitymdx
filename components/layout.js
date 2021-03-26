import TopNavigation from "./top-navigation";

export default function Layout(props) {
  return (
    <div className="flex flex-col w-full max-w-8xl">
      <TopNavigation />
      <main>{props.children}</main>
    </div>
  );
}
