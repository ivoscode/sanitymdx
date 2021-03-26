import Image from "next/image";

export default function Hero(props) {
  return (
    <section>
      <div className=" relative h-96 -mx-24  sm:mx-0">
        <Image
          src={props.imgsource}
          alt={props.alt}
          layout="fill"
          objectFit="cover"
          objectPosition="center center"
        />
      </div>
      <h1>Hi, I am Liena</h1>
      <p>I blog about everything Montessori</p>
    </section>
  );
}
