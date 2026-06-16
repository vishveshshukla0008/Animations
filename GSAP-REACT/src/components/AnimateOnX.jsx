import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
const AnimateOnX = ({ children }) => {
    const containerRef = useRef(null);
  useGSAP(
    () => {
      gsap.to(containerRef.current, {
        x: 600,
        duration: 1,
        delay: 0.6,
      });
    },
    { dependencies: [], revertOnUpdate: true },
  );
  return <div ref={containerRef}>{children}</div>;
};

export default AnimateOnX;
