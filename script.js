const main = document.getElementById("main");
const button = document.querySelector("button");
const body = document.querySelector("body");
const container = document.getElementsByClassName("container");

button.onclick = create;

create();

function create() {
  let kod = "";
  for (let i = 0; i < 12; i++) {
    let rgb1 = rnd(0, 255);
    let rgb2 = rnd(0, 255);
    let rgb3 = rnd(0, 255);
    kod += `
        <div class="color">
         <div onclick="change(this)" class="color-div"style=" background:rgb(${rgb1},${rgb2},${rgb3})"></div>
         <div>
             <p>rgb(${rgb1},${rgb2},${rgb3})</p>
         </div>
        </div>
    `;
  }
  main.innerHTML = kod;
}

function change(div) {
  body.style.background = div.style.background;
  button.style.background = div.style.background;
  container.style.background = div.style.background;
}

function rnd(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
