const answer = document.querySelector("#answer");
const cards = document.querySelectorAll(".challenge-card");

const notes = {
  A: "Field note: trust this least. It uses urgency without evidence. Before sharing, ask: who posted the original, when was it posted, and what context is missing?",
  B: "Field note: this is the strongest version because it points back to an original source. Still check that the account is real and the date is current.",
  C: "Field note: this might be real, but it is secondhand. Treat it as unverified until someone finds the original message."
};

cards.forEach((card) => {
  card.addEventListener("click", () => {
    cards.forEach((item) => item.classList.remove("selected"));
    card.classList.add("selected");
    answer.textContent = notes[card.dataset.answer];
  });
});
