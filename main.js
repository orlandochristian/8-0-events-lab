// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!



const colores = document.querySelectorAll(".color");
for (const color of colores) {
  color.addEventListener("click", () => {
    document.getElementById("current-color").style.background = color.style.background
  })
}





const grilla = document.querySelector
const canvasCell = document.querySelectorAll(".cell");

for (const cell of canvasCell) {
  cell.addEventListener("click", () => {
    cell.style.background =  document.getElementById("current-color").style.background
  }) 
}
const paleta = document.querySelectorAll("#canvas .cell")
const elboton = document.querySelector(".allwhite");
elboton.addEventListener("click", () => {
  for (const celda of paleta) {
     celda.style.background = "white";
  }
})


