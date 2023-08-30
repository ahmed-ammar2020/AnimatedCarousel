"use strict";
$(".owl-carousel").owlCarousel({
  items: 1,
  loop: true,
  margin: 10,
  animateOut: "animate__bounceOut",
  animateIn: "animate__backInUp",
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
});
$(".play").on("click", function () {
  $(".owl-carousel").trigger("play.owl.autoplay", [1000]);
});
$(".stop").on("click", function () {
  $(".owl-carousel").trigger("stop.owl.autoplay");
});
