import TopNavigation from "./top-navigation";

export default function Layout(props) {
  return (
    <div className="flex flex-col w-full max-w-8xl">
      <TopNavigation />
      <main className="sm:px-10 lg:px-16 ">{props.children}</main>
    </div>
  );
}
