let ct = document.querySelector(".color_text").children;
let textareavalue = ct[0].value;
let ColorValue = ct[1].children[0].value;
let btn = document.querySelector("button");
let rightContainer = document.querySelector(".right");
let btn2 = document.querySelector(".btn2");
btn.addEventListener("click", () => {
  let ColorValue = ct[1].children[0].value;
  if (ct[0].value === "") {
    alert("please enter some text!!!");
    return;
  }
  makeStickeyNotes(ct[0].value, ColorValue);
  ct[0].value = "";
  document.querySelector(".noteesNoteAdded").style.display = "none";
  removeStickyNotes();
});
function removeStickyNotes() {
  btn2 = document.querySelectorAll(".btn2");
  btn2.forEach((singleBtny) => {
    singleBtny.addEventListener("click", (e) => {
      e.target.parentElement.remove();
    });
  });
}

function makeStickeyNotes(text, color) {
  let div = document.createElement("div");
  div.innerHTML = `
    <p>${text}</p>
    <button class="btn2">X</button>`;
  div.style.backgroundColor = color;
  rightContainer.appendChild(div);
}
