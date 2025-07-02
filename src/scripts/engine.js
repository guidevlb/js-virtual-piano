const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheck = document.querySelector(".keys-check input");

let mapedKeys = [];

const playTune = (key) => {
  const audio = new Audio(`src/tunes/${key}.wav`);
  audio.volume = volumeSlider.value;
  audio.play();

  const clickedKey = document.querySelector(`[data-key="${key}"]`);
  clickedKey.classList.add("active");
  setTimeout(() => clickedKey.classList.remove("active"), 200);
};

pianoKeys.forEach((key) => {
  key.addEventListener("click", () => playTune(key.dataset.key));
  mapedKeys.push(key.dataset.key);
});

document.addEventListener("keydown", (e) => {
  if (mapedKeys.includes(e.key)) playTune(e.key);
});

volumeSlider.addEventListener("input", (e) => {
  const volume = e.target.value;
});

keysCheck.addEventListener("click", () => {
  pianoKeys.forEach((key) => key.classList.toggle("hide"));
});
