// Your code here
/*
document.addEventListener("keydown", function (event) {
  console.log(event);
});

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    dodger.style.left = `${left - 1}px`;
  }
});
*/

const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
  const rightTmp = dodger.style.left;
    //console.log(rightTmp);
  const rightNumbers = dodger.style.left.replace("px", "");
    //console.log(rightNumbers);
  const left = parseInt(rightNumbers, 10);
    //console.log(left);

  if (left < 361) {
    dodger.style.left = `${left + 1}px`;
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }

  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});