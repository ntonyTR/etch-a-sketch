const container = document.getElementById("container");

const button4 = document.getElementById("btn_4");
const button6 = document.getElementById("btn_6");
const button8 = document.getElementById("btn_8");

button4.addEventListener("click", () => makeGrid(17));
button6.addEventListener("click", () => makeGrid(37));
button8.addEventListener("click", () => makeGrid(65));

function makeGrid(n) {
  for (let i = 1; i < n; i++) {
    let div = document.createElement("div");
    div.classList.add("grid");
    container.appendChild(div);
    div.textContent = i;
  }
}
