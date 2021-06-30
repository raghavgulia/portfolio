const el = document.getElementById("effect");
const textList = el.textContent.split("");
let content = (el.innerHTML = "");

textList.forEach((e, pos) => {
  setTimeout(() => {
    content += e;
    el.innerHTML = content + '<div class="cursor"></div>';
  }, (pos * 1000) / getComputedStyle(document.querySelector(":root")).getPropertyValue("--speed"));
});
