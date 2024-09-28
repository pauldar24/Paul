const mybutton = document.getElementById("buttonChange");

mybutton.addEventListener("click", changeColor);

mybutton.addEventListener("keydown", changeSize);

function changeColor() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);

  mybutton.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

function changeSize(event) {
  let currentWith = parseInt(mybutton.style.width) || 100;
  let currentHeight = parseInt(mybutton.style.height) || 100;
  if (event.key === "ArrowUp") {
    currentWith = currentWith + 10;
    currentHeight = currentHeight + 10;
  }
  if (event.key === "ArrowDown") {
    currentWith = currentWith - 10;
    currentHeight = currentHeight - 10;
  }
  mybutton.style.width = currentWith + "px";
  mybutton.style.height = currentWith + "px";
}
