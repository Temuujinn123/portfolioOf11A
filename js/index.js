let leftOption = {
  origin: "left",
  distance: "150%",
  reset: true,
  duration: 1000,
};

let rightOption = {
  origin: "right",
  distance: "150%",
  reset: true,
  duration: 1000,
};

let bottomOption = {
  origin: "bottom",
  distance: "25%",
  reset: true,
  duration: 1000,
};

ScrollReveal().reveal("#right", rightOption);

ScrollReveal().reveal("#left", leftOption);

ScrollReveal().reveal("#bottom", bottomOption);
