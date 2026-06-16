gsap.registerPlugin(ScrollTrigger, SplitText);

const split = new SplitText(".title", {
  type: "chars,words,lines",
  wordsClass: "titleWord",
  charsClass: "titleChars",
});

gsap.from(split.chars, {
  yPercent: 100,
  opacity: 0,
  duration: 1.2,
  ease: "expo.out",
  stagger: {
    each: 0.05,
    from: "edges",
  },
});
