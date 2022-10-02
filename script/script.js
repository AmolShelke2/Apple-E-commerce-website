// Common Js
document
  .querySelectorAll(".watch-control, .controls a, .iphone-btn")
  .forEach((control) =>
    control.addEventListener("click", (e) => {
      e.preventDefault();
    })
  );

// Cube
let x = 0;
let y = 20;
let z = 0;
let bool = true;
let interval;

const cube = document.querySelector(".cube");

document.querySelector(".top-x-control").addEventListener("click", () => {
  cube.style.transform = `rotateX(${(x += 20)}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
});

document.querySelector(".bottom-x-control").addEventListener("click", () => {
  cube.style.transform = `rotateX(${(x -= 20)}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
});

document.querySelector(".left-y-control").addEventListener("click", () => {
  cube.style.transform = `rotateX(${x}deg) rotateY(${(x -= 20)}deg) rotateZ(${z}deg)`;
});

document.querySelector(".right-y-control").addEventListener("click", () => {
  cube.style.transform = `rotateX(${x}deg) rotateY(${(x += 20)}deg) rotateZ(${z}deg)`;
});

document.querySelector(".top-z-control").addEventListener("click", () => {
  cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${(z -= 20)}deg)`;
});

document.querySelector(".bottom-z-control").addEventListener("click", () => {
  cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${(z += 20)}deg)`;
});

const playPause = () => {
  if (bool) {
    interval = setInterval(() => {
      cube.style.transform = `rotate(${x}deg) rotateY(${y++}deg) rotateZ(${z}deg)`;
    }, 100);
  } else {
    clearInterval(interval);
  }
};

playPause();

document.querySelector(".controls").addEventListener("mouseover", () => {
  bool = false;
  playPause();
});

document.querySelector(".controls").addEventListener("mouseout", () => {
  bool = true;
  playPause();
});

// End of Cube
