import {useContext } from 'react';
import { UiContext } from "../../context";
import { BsFileEarmarkRichtext } from 'react-icons/bs';
import person_high from '../../assets/person_high.jpg';
import person_mid from '../../assets/person_mid.jpg';
import person_low from '../../assets/person_low.jpg';

const About = () => {
  const {aboutRef} = useContext(UiContext);
  return (
    <section
      id="about"
      ref={aboutRef}
      className="flex justify-center items-center h-full my-[9rem] flex-col md:flex-row text-center"
    >
      <article className="flex-1 relative flex justify-center items-center w-full h-full mb-8 ">
        <article className="hidden absolute top-12 left-12 w-3/4 h-[30vh] rounded-[30px] overflow-hidden md:h-[70vh] bg-amber-400 md:flex shadow-2xl"></article>

        <article className="w-3/4 h-[30vh] rounded-[30px] overflow-hidden relative md:h-[70vh] shadow-2xl">
          <img
            srcSet={`${person_high} 3x,
                    ${person_mid} 2x,
                    ${person_low} 1.5x`}
            src={person_low}
            alt="aboutImg"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </article>
      </article>
      <article className="flex-1 w-full">
        <h1 className="font-bold text-6xl mb-8 tracking-wide">
          About <span className="text-amber-400">Me</span>
        </h1>
        <p className="font-semibold">
          I strive for progress over{" "}
          <span className="text-amber-400 drop-shadow-lg">PERFECTION!</span>
        </p>
        <p className="text-justify mx-12 py-3">
          Highly motivated self-taught developer building web applications and
          services. Familiar with front-end and back-end development as well as
          deployment process for many web-based technologies. Have expertise in
          frameworks and libraries such as REACT.JS for the front-end, NODE.JS,
          EXPRESS.JS for the back-end, and MONGO DB for the database. Currently,
          I'm focused on building responsive FULL-STACK Web applications.
        </p>
        <a
          href=""
          download
          className="inline-flex justify-center items-center w-60 mt-2 mb-10 md:mb-0 text-xl font-semibold h-14 bg-amber-400 drop-shadow-2xl rounded-full hover:scale-110 hover:bg-amber-500 active:translate-y-[6px] transition-all"
        >
          <button className="inline-flex items-center gap-2 drop-shadow-lg">
            <span>Download CV</span>
            <BsFileEarmarkRichtext />
          </button>
        </a>
      </article>
    </section>
  );
};
export default About;