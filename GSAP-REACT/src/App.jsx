import "./App.scss";
import AnimateOnX from "./components/AnimateOnX";

const App = () => {
  return (
    <div className="outer">
      <AnimateOnX>
        <div className="box"></div>
      </AnimateOnX>
      <AnimateOnX>
        <button>dabao mujhe</button>
      </AnimateOnX>
    </div>
  );
};

export default App;
