import Image from "next/image";

export default function Afilinks({ afilinks }) {
  if (!afilinks) {
    return <h1>Posts loading</h1>;
  }
  return (
    <section className="mt-20">
      <h1 className="text-3xl"> Afilinks with filter</h1>
      <ul className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-10 lg:gap-x-16 ">
        {afilinks.map((afilink) => {
          return (
            <li key={afilink.title}>
              <a href={afilink.afilinkURL} target="blank">
                <div className="shadow-small hove:shadow-medium transition-shadow duration-200 ">
                  <Image
                    src={afilink.coverImage}
                    alt={afilink.title}
                    width={300}
                    height={200}
                    layout="responsive"
                  />
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
