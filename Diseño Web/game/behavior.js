const myButton = document.getElementById("buttonChange");
let posX = 0;
let posY = 0;
const step = 10;

document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowUp":
      posY -= step;
      break;
    case "ArrowDown":
      posY += step;
      break;
    case "ArrowLeft":
      posX -= step;
      break;
    case "ArrowRight":
      posX += step;
      break;
  }

  myButton.style.left = `${posX}px`;
  myButton.style.top = `${posY}px`;
});
