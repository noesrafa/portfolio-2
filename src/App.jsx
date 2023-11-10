import { useEffect } from "react";
import { useState } from "react";
import Lenis from "@studio-freight/lenis";
import Styles from "./app.module.scss";
import Nav from "./components/Nav/Nav";
import Header from "./pages/header/Header";

const App = () => {
  const [category, setCategory] = useState("cases");

  const locomotion = async () => {
    const lenis = new Lenis();
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    document.body.style.cursor = "default";
    requestAnimationFrame(raf);
  };

  useEffect(() => {
    if (window.innerWidth > 768) {
      locomotion();
    }
  }, []);

  return (
    <section className={Styles.app}>
      <Nav category={category} setCategory={setCategory} />
      {category === "cases" && (
        <div>
          <Header />
        </div>
      )}
    </section>
  );
};

export default App;
