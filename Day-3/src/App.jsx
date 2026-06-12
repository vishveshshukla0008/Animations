import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./App.css";
const App = () => {
  useGSAP(() => {
    // gsap.to(".box", {
    //   x: 200,
    //   duration: 2,
    // });
    // gsap.to(".box2", {
    //   x: 200,
    //   duration: 2,
    //   delay: 2,
    // });
    // gsap.to(".box3", {
    //   x: 200,
    //   duration: 2,
    //   delay: 4,
    // });

    const tl = gsap.timeline();

    tl.to(".box", {
      x: 200,
      // duration: 2,
      delay: 2,
    })
      .to(
        ".box2",
        {
          x: 300,
          duration: 1.3,
        },
        "yash",
      )
      .to(
        ".box3",
        {
          x: 300,
          // duration: 1.3,
        },
        "yash",
      )
      .to(".box4", {
        x: 300,
        // duration: 1.3,
      });
  }, []);
  return (
    <div className="outer">
      <div className="box"></div>
      <div className="box2"></div>
      <div className="box3"></div>
      <div className="box4"></div>
    </div>
  );
};

export default App;
