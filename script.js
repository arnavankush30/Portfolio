let tl = gsap.timeline();

function revealToSpan() {
  document.querySelectorAll(".reveal").forEach(function (elem) {
    let parent = document.createElement("span");
    let child = document.createElement("span");

    parent.classList.add("parent");
    child.classList.add("child");

    child.innerHTML = elem.innerHTML;
    parent.appendChild(child);

    elem.innerHTML = "";
    elem.appendChild(parent);
  });
}

function loaderAnimation() {
  tl.from(".child span", {
    x: 547,
    duration: 2,
    stagger: 0.2,
    delay: 1,
    ease: Power3.easeInOut,
  })
    .to(".parent .child", {
      y: "-100%",
      duration: 1,
      delay: 1.5,
      ease: Circ.easeInOut,
    })
    .to(".loader", {
      height: 0,
      duration: 1,
      ease: Circ.easeInOut,
    })
    .to(".green", {
      height: "100%",
      top: 0,
      duration: 1,
      delay: -1,
      ease: Circ.easeInOut,
    })
    .to(".green", {
      height: 0,
      duration: 1,
      delay: -0.4,
      ease: Circ.easeInOut,
    });
}

gsap.from("g path", {
  strokeDasharray: 64.68521881103516,
  strokeOffset: 64.68521881103516,
  duration: 1,
  ease: Power3,
});
revealToSpan();
loaderAnimation();
