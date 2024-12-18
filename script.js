let tl = gsap.timeline();
gsap.registerPlugin(ScrollTrigger);

function valueSetters() {
  gsap.set(".nav a , .button", {
    y: "-100%",
    opacity: 0,
  });
  gsap.set(".home span .child", {
    y: "100%",
  });
  gsap.set(".home .row img", {
    opacity: 0,
    x: -50,
  });
}

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
  tl.from(".loader .child span", {
    x: 547,
    duration: 2,
    stagger: 0.2,
    delay: 1,
    ease: Power3.easeInOut,
  })
    .to(".loader .parent .child", {
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
      onComplete: function () {
        animateHomepage();
      },
    });
}

function animateHomepage() {
  var tl = gsap.timeline();

  tl.to(".nav a, .button", {
    y: 0,
    opacity: 1,
    stagger: 0.5,
    ease: Expo.easeInOut,
  })
    .to(".home .parent .child", {
      y: 0,
      stagger: 0.1,
      duration: 2,
      ease: Expo.easeInOut,
    })
    .to(".home .row img", {
      opacity: 1,
      ease: Expo.easeInOut,
    });
}

function smoothScroll() {
  // Initialize a new Lenis instance for smooth scrolling
  const lenis = new Lenis();

  // Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
  lenis.on("scroll", ScrollTrigger.update);

  // Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
  // This ensures Lenis's smooth scroll animation updates on each GSAP tick
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000); // Convert time from seconds to milliseconds
  });

  // Disable lag smoothing in GSAP to prevent any delay in scroll animations
  gsap.ticker.lagSmoothing(0);
}

revealToSpan();
valueSetters();
loaderAnimation();
smoothScroll();
