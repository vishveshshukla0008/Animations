const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const restart = document.querySelector(".restart");
const reverse = document.querySelector(".reverse");
const seek = document.querySelector(".seek");

const tl = gsap.timeline({ paused: true });

tl.to(".box", {
  x: 400,
  duration: 1,
  delay: 0.6,
  ease: "power3.inOut",
})
  .to(".box1", {
    x: 400,
    duration: 1,
    ease: "power3.inOut",
  })
  .to(".box2", {
    x: 400,
    duration: 1,
    ease: "power3.inOut",
  })
  .addLabel("yash")
  .to(".box3", {
    x: 400,
    duration: 1,
    ease: "power3.inOut",
  })
  .to(".box4", {
    x: 400,
    duration: 1,
    ease: "power3.inOut",
  });

play.addEventListener("click", () => {
  tl.play();
});

pause.addEventListener("click", () => {
  tl.pause();
});

restart.addEventListener("click", () => {
  tl.restart();
});

reverse.addEventListener("click", () => {
  tl.reverse();
});

seek.addEventListener("click", () => {
  tl.seek("yash");
});

const firstTimeLine = () => {
  return gsap.timeline();
};

const secondTimeLine = () => {
  return gsap.timeline();
};

const master = gsap.timeline();
master.add(firstTimeLine, "-=0.4").add(secondTimeLine);
