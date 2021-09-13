/* eslint-disable linebreak-style */
function renderer() {
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((el) => {
    if (el.classList.contains("box_with_goblin")) {
      el.classList.remove("box_with_goblin");
    }
  });
  const index = Math.floor(Math.random() * 16);
  boxes[index].classList.add("box_with_goblin");
}
document.addEventListener("DOMContentLoaded", () => {
  setInterval(() => renderer(), 1000);
});
