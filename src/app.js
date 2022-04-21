
const adviceID = document.querySelector("#adviceID")
const adviceText = document.querySelector("#adviceText")
const adviceBtn = document.querySelector("#adviceBtn")

const url = "https://api.adviceslip.com/advice";

window.onload = getAdvice
adviceBtn.onclick = getAdvice

function getAdvice() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      adviceID.textContent = `Advice #${data.slip.id}`;
      adviceText.textContent = data.slip.advice;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}