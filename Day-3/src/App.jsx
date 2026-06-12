// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
import "./App.css";

const App = () => {
  const h1 = document.querySelector("h1");
  let count = 0;
  const timer = setTimeout(() => {
    count++;
    h1.innerHTML = `${count}%`;
    if (count == 100) {
      clearTimeout(timer);
    }
  }, 20);
  return (
    <div className="outer">
      <div className="black-screen">
        <h1>0%</h1>
      </div>
      {/* <div className="main">Hello</div> */}
    </div>
  );
};

export default App;
