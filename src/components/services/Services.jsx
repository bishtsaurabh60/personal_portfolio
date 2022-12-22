import { useContext } from "react";
import { UiContext } from "../../context";
import Card from "./Card";
const Services = () => {
  const { servicesRef } = useContext(UiContext);
  const serviceSkill = [
    {
      service: "WEB DEVELOPMENT",
      details:
        "HTML, Css, JavaScript, React, Node.js, Express, Mongo DB and many more.",
      imgSrc: "src/assets/web.webp",
    },
    {
      service: "MOBILE DEVELOPMENT",
      details: "Coming Soon...",
      imgSrc: "src/assets/mobile6.jpg",
    },
    {
      service: "UI/UX",
      details: "Coming soon...",
      imgSrc: "src/assets/ui2.webp",
    },
  ];
  
  return (
    <section
      id="services"
      ref={servicesRef}
      className="flex place-items-center h-full flex-col md:flex-row cursor-pointer my-[10rem]"
    >
      <article className="flex-1 flex justify-center items-center flex-col">
        <h1 className="font-bold text-6xl mb-6 drop-shadow-lg tracking-wide">
          Services
        </h1>
        <article className="flex justify-evenly items-center gap-6 m-8 sm:mx-14 lg:m-8 flex-col sm:flex-wrap md:flex-wrap lg:flex-row">
          {serviceSkill.map(({ service, details, imgSrc }, i) => (
            <Card
              key={i}
              service={service}
              details={details}
              imgSrc={imgSrc}
              i = {i}
            />
          ))}
        </article>
      </article>
    </section>
  );
};
export default Services;