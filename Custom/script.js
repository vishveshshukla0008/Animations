gsap.set(".image-div", {
  scale: 0.25,
});

gsap.set(".content", {
  gap: "70rem",
});

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".image-div",
    start: "top 50%",
    end: "top 40%",
    scrub: true,
  },
});

tl.to(".image-div", {
  scale: 1,
  ease: "power1.out",
}).to(
  ".content",
  {
    gap: "5rem",
    ease: "expo.in",
  },
  "-0.25",
);
