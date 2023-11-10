import Styles from "./Header.module.scss";
import { useRef } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";
import { useEffect } from "react";

const Header = () => {
  const title = useRef(null);

  const ourText = SplitType.create(".title", { types: "words" });
  const chars = ourText.words;

  useEffect(() => {
    gsap.set(chars, { y: "100%" });
    gsap.to(chars, {
      duration: 0.5,
      y: "0%",
      stagger: 0.1,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <header className={Styles.header}>
      <p>
        I´m Rafael - a Multidisciplinary Designer with focus on Motion,
        interactive design and develop.
      </p>
    </header>
  );
};

export default Header;
