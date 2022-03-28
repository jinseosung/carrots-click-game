const gameBtn = document.querySelector(".game__btn");
const gameField = document.querySelector(".game__field");
const fieldRect = gameField.getBoundingClientRect();

function gameStart() {
  for (i = 0; i < 10; i++) {
    const bug = document.createElement("img");
    bug.src = `img/bug.png`;
    bug.style.position = "absolute";

    const x = Math.floor(Math.random() * (fieldRect.width - 50));
    const y = Math.floor(Math.random() * (fieldRect.height - 50));
    bug.style.left = `${x}px`;
    bug.style.top = `${y}px`;
    gameField.appendChild(bug);
  }

  for (i = 0; i < 10; i++) {
    const carrot = document.createElement("img");
    carrot.src = `img/carrot.png`;
    carrot.style.position = "absolute";

    const x = Math.floor(Math.random() * (fieldRect.width - 80));
    const y = Math.floor(Math.random() * (fieldRect.height - 80));
    carrot.style.left = `${x}px`;
    carrot.style.top = `${y}px`;
    gameField.appendChild(carrot);
  }
}

gameBtn.addEventListener("click", gameStart);
