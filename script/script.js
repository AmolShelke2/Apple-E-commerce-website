// Common Js
document
  .querySelectorAll(".watch-control, .controls a, .iphone-btn")
  .forEach((control) =>
    control.addEventListener("click", (e) => {
      e.preventDefault();
    })
  );

// Cube
