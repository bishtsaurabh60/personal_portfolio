import {useEffect,useState, useContext } from "react";
import SkillCard from "./SkillCard";
import { frontEnd, backEnd } from "./skillSet";
import { UiContext } from "../../context";

const Skills = () => {
  const [isAnimate, setIsAnimate] = useState(false);
  const { skillsRef } = useContext(UiContext);


  // Intersection Observer API provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document's viewport. 
  // here we used intersection Observer for triggering the animation on scroll...
  const options = {
    rootMargin: "0px",
    threshold: 0.25,
  };
  const callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio >= 0.25) {
        setIsAnimate(true);
      } else {
        setIsAnimate(false);
      }
    });
  };
  const observer = new IntersectionObserver(callback, options);

  useEffect(() => {
    observer.observe(skillsRef.current);
  }, []);

  return (
    <section
      id="skills"
      ref={skillsRef}
      className="flex flex-col justify-center"
    >
      <h1 className="self-center font-bold text-6xl mb-2 drop-shadow-lg tracking-wide">
        Skills
      </h1>
      <article className="flex place-items-center flex-col lg:flex-row">
        <SkillCard stack={frontEnd} skills="Frontend" isAnimate={isAnimate} />
        <SkillCard stack={backEnd} skills="Backend" isAnimate={isAnimate} />
      </article>
    </section>
  );
};
export default Skills;