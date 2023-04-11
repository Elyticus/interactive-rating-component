// My CODE_______________________________________________________

const ratingCard = document.querySelector(".rating__container");
const thankYouCard = document.querySelector(".thank__you");

const clickedButton = document.querySelector(".submit__button");
const selectNumber = document.querySelectorAll(".number");

const selectRating = document.getElementById("rated");

let isAlive = true;
let isNumberSelected = false;

function play() {
  clickedButton.addEventListener("click", function () {
    thankYouCard.classList.remove("hidden");
    ratingCard.style.display = "none";
  });
}

function myNumber() {
  selectNumber.forEach((rate) => {
    rate.addEventListener("click", () => {
      selectRating.innerHTML = rate.innerHTML;
      isNumberSelected = true;
      if (isAlive && isNumberSelected) {
        play();
        isAlive = false;
      }
    });
  });
}

myNumber();
