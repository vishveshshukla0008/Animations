let h1 = document.querySelector("h1");
let count = 0;

let timer = setInterval(() => {
  count++;
  h1.innerHTML = `${count}%`;
  if (count == 100) {
    clearInterval(timer);
    startAnimation();
  }
}, 10);

function startAnimation() {
  const tl = gsap.timeline();

  tl.to(h1, {
    opacity: 0,
    duration: 0.75,
  })
    .to(
      ".black-screen",
      {
        yPercent: -100,
        ease: "power3.in",
      },
      "-=0.3",
    )
    .from(
      "img",
      {
        scale: 1.25,
        duration: 1.2,
        ease: "expo.out",
      },
      "+=0.1",
    )
    .from(
      ".h1 span",
      {
        yPercent: 300,
        opacity: 0,
        ease: "power2.inOut",
        stagger: 0.1,
      },
      "-=1",
    )
    .from(
      ".h2 span",
      {
        opacity: 0,
        yPercent: 100,
        stagger: 0.05,
        ease: "power3.out",
      },
      "-=0.6",
    );
}
