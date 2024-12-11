let tl = gsap.timeline();
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

revealToSpan();
valueSetters();
loaderAnimation();
