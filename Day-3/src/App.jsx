import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./App.css";
const App = () => {
  useGSAP(() => {
    // gsap.to(".box", {
    //   x: 900,
    //   // duration: 1,
    //   stagger: {
    //     each: 0.2,
    //     from: "random",
    //   },
    // });

    gsap.from("h1 span", {
      yPercent: 100,
      opacity: 0,
      duration: 1.5,
      ease: "expo.out",
      stagger: {
        each: 0.1,
        from: "edges",
      },
    });
  }, []);
  return (
    <div className="outer">
      <div className="heading">
        <h1>
          <span>V</span>
          <span>I</span>
          <span>S</span>
          <span>H</span>
          <span>W</span>
          <span>E</span>
          <span>S</span>
          <span>H</span>
        </h1>
      </div>
    </div>
  );
};

export default App;
