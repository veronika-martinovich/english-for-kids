import { state, MODE1, MODE2 } from "./state";
import { shuffleActiveWordCards } from "./shuffleActiveWordCards";
import { addStarIcon } from "./addStarIcon";

export function playGame() {
  state.isPlayOn = !state.isPlayOn;
  const shuffledWordCards = shuffleActiveWordCards(state.activeWordCards);
  const audio = document.querySelector(".audio");
  const cardsLayout = document.querySelector(".cards-layout");
  let counterSuccess = 0;
  let counterFailure = 0;
  console.log(state, audio);
  setTimeout(playAudio, 1500);

  function playAudio() {
    if (shuffledWordCards.length > 0) {
      audio.setAttribute(
        "src",
        shuffledWordCards[shuffledWordCards.length - 1].audio
      );
      state.activeAudio = shuffledWordCards[shuffledWordCards.length - 1].audio;
      cardsLayout.addEventListener("click", cardClickHandler);
    } else {
      state.isPlayOn = !state.isPlayOn;

      console.log("game over", counterSuccess, counterFailure, state.isPlayOn);
    }
  }

  function cardClickHandler(e) {
    if (
      e.target.parentElement.parentElement.dataset.word ===
      shuffledWordCards[shuffledWordCards.length - 1].word
    ) {
      counterSuccess++;
      audio.setAttribute("src", "./src/audio/game_sounds/correct.mp3");
      e.target.classList.add("word-card__img_disabled");
      addStarIcon("success");
      shuffledWordCards.pop();
      setTimeout(playAudio, 1500);
    } else if (!e.target.classList.contains("cards-layout")) {
      counterFailure++;
      audio.setAttribute("src", "./src/audio/game_sounds/error.mp3");
      addStarIcon("failure");
    }
  }
}
