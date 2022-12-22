import { createContext, useReducer, useRef } from "react";

export const UiContext = createContext();

const INITIAL_STATE = { darkMode: false };

const themeReducer = (state, action) => {
  return action.type === "TOGGLE" ? { darkMode: !state.darkMode } : state;
};

function ThemeUiProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, INITIAL_STATE);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const servicesRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

  const scrollOnClick = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - (elementRef !== contactRef ? 45 : 0),
      behavior: "smooth",
    });
  };

  // useEffect(() => {
  //   const handleScroll = (e) => {
  //     if (window.scrollY >= 0 && window.scrollY <= window.innerHeight / 2) {
  //       // Set states for nav items here if the user is on the first section
  //     } else if (
  //       servicesRef.current.offsetTop - window.scrollY < window.innerHeight / 2 &&
  //       stuffRef.current.offsetTop - window.scrollY >= window.innerHeight / 2
  //     ) {
  //       // For the about section
  //     } else {
  //       // Etc...
  //     }
  //   };
  //   document.addEventListener("scroll", handleScroll);
  //   return () => {
  //     document.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);


  return (
    <UiContext.Provider
      value={{
        state,
        dispatch,
        homeRef,
        aboutRef,
        skillsRef,
        servicesRef,
        workRef,
        contactRef,
        scrollOnClick,
      }}
    >
      {children}
    </UiContext.Provider>
  );
}
export default ThemeUiProvider;
