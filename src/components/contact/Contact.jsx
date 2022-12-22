import {useContext, useRef, useState} from 'react';
import { BsLinkedin, BsFillCheckCircleFill } from 'react-icons/bs';
import { GoMarkGithub } from 'react-icons/go';
import { GrTwitter } from 'react-icons/gr';
import { RiSendPlaneFill } from 'react-icons/ri';
import { UiContext } from '../../context';
import details from './info';
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef(null);
  const { state: { darkMode },contactRef } = useContext(UiContext);
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE,
        import.meta.env.VITE_EMAIL_TEMPLATE,
        formRef.current,
        import.meta.env.VITE_EMAIL_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section
      ref={contactRef}
      className="flex h-full flex-col items-center justify-center border-l-[1.25rem] border-amber-400 p-10 md:pb-0 lg:my-0 lg:h-screen lg:flex-row lg:py-0"
    >
      <section className="flex flex-1 items-center justify-center">
        <article>
          <h1 className="p-4 text-6xl font-extrabold">
            Let's Discuss About Your Project
          </h1>
          {details.map(({ icon, detail }, i) => (
            <article key={i}>
              <article className="flex items-center justify-start gap-4 p-4">
                <img src={icon} alt="" className="h-8 w-8 drop-shadow-2xl" />
                <p className="">{detail}</p>
              </article>
            </article>
          ))}
          <article className="flex justify-start gap-6 pt-8 pl-3">
            <GoMarkGithub className="social transition-all duration-300" />
            <BsLinkedin className="social transition-all duration-300" />
            <GrTwitter className="social transition-all duration-300" />
          </article>
          <article className="flex justify-start flex-col pt-8 pl-3 text-[0.8rem]">
            <p>@2022 SAURABH BISHT</p>
            <p>ALL RIGHTS ARE RESERVED</p>
          </article>
        </article>
      </section>
      <section className="flex-1">
        <article className="flex flex-col justify-center pt-8 pb-0 sm:p-8 lg:pb-0">
          <p>
            <strong>What’s your story?</strong> Get in touch. Always available
            for freelancing if the right project comes along me.
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col justify-center gap-4 p-8 pl-0 pt-4 pb-0"
          >
            <input
              type="text"
              name="user_name"
              placeholder="Name*"
              className={`input ${darkMode && "bg-[#333]"}`}
              minLength={3}
              maxLength={20}
              required
            />
            <input
              type="text"
              name="user_subject"
              placeholder="Subject*"
              className={`input ${darkMode && "bg-[#333]"}`}
              minLength={3}
              maxLength={20}
              required
            />
            <input
              type="Email"
              name="user_email"
              placeholder="Email*"
              className={`input ${darkMode && "bg-[#333]"}`}
              required
            />
            <textarea
              name="message"
              id=""
              cols="30"
              rows="5"
              placeholder="Message*"
              className={`my-[14px] w-full border-b-[1px] border-black pl-[10px] font-[1.1rem] ${
                darkMode && "bg-[#333]"
              }`}
              required
            />
            <article className="flex items-center gap-4">
              <button
                type="submit"
                className="group flex h-12 w-52 items-center justify-center gap-2 rounded-[2rem] bg-amber-400 text-lg font-medium shadow-2xl drop-shadow-2xl transition-all hover:bg-amber-500 active:translate-y-1"
              >
                <span>Send Message</span>
                <RiSendPlaneFill className="h-6 w-6 transition-all duration-500 group-hover:rotate-45" />
              </button>
              {done && (
                <>
                  <BsFillCheckCircleFill className="h-6 w-6 text-green-700 transition-all" />
                  <span>......ThankYou For Reaching Us......</span>
                </>
              )}
            </article>
          </form>
        </article>
      </section>
    </section>
  );
};
export default Contact;
