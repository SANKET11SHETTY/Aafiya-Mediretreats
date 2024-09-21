//  Text Animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("ani-h-show");
    } else {
      entry.target.classList.remove("ani-h-show");
    }
  });
});
const hiddenElements = document.querySelectorAll(".ani-h");
hiddenElements.forEach((el) => observer.observe(el));

// Dark Mode
$(document).ready(function () {
  $(".darkmoding").click(function () {
    $("body").toggleClass("darkModer");
  });
});

// Gsap Cursor
var cursor = document.querySelector("#cursor");
window.addEventListener("mousemove", function (event) {
  gsap.to(cursor, {
    x: event.x,
    y: event.y,
    duration: 1,
    ease: "back.out",
  });
  console.log(event);
});

// Auto Type
let typed = new Typed(".auto-typers", {
  strings: ["Replacement"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});

//   Owl Carousel
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 5,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 2000,
    // autoplayHoverPause:true,
    dotsEach: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});

// Pre Loader
var loader = document.getElementById("pre-loader1");

window.addEventListener("load", function () {
  loader.style.display = "none";
});
