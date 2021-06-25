var options = [
  {
    imageSrc: "up-once.gif",
  },
  {
    imageSrc: "down-once.gif",
  },
];

var gifStatuses = options.map(() => false);
console.log(gifStatuses);

function preloadGifs() {
  options.forEach(function (option, optionIndex) {
    console.log("load", option);
    var img = new Image();
    img.onload = function () {
      console.log("loaded", optionIndex);
      gifStatuses[optionIndex] = true;
      updateDropButton();
    };
    img.src = option.imageSrc;
  });
}

preloadGifs();

var dropButton = document.querySelector(".drop-button");

function updateDropButton() {
  if (gifStatuses.every((status) => status)) {
    console.log("enable drop button");
    dropButton.disabled = false;
  }
}

var lawWorks = "law works";
var lawDoesntWork = "law does not work";
var tryAgain = "drop again to know the result";

function getRandomOptionIndex() {
  return Math.random() > 0.5 ? 0 : 1;
}

var results = [1, 1];

var firstScreen = document.querySelector(".first-screen");
var secondScreen = document.querySelector(".second-screen");

var resultText = document.querySelector(".result-text");
var upCount = document.querySelector(".up-count");
var downCount = document.querySelector(".down-count");

var scrollButton = document.querySelector(".scroll-button");
var image = document.querySelector(".hleb");

function updateBackground() {
  var total = results[0] + results[1];
  var percent = (results[0] / total) * 100;
  var gradient =
    "linear-gradient(to right, rgb(0, 205, 82) 0%, rgb(0, 205, 82) " +
    percent +
    "%, rgb(255, 22, 36) " +
    percent +
    "%, rgb(255, 22, 36) 100%)";
  firstScreen.style.background = gradient;
}

function updateCounters() {
  upCount.innerHTML = "butter up: " + (results[0] - 1);
  downCount.innerHTML = "butter down: " + (results[1] - 1);
}

function updateHeader() {
  if (results[0] > results[1]) {
    resultText.innerHTML = lawDoesntWork;
  } else if (results[0] < results[1]) {
    resultText.innerHTML = lawWorks;
  } else {
    resultText.innerHTML = tryAgain;
  }
}

dropButton.addEventListener("click", function () {
  var optionIndex = getRandomOptionIndex();
  var option = options[optionIndex];
  results[optionIndex]++;
  image.src = option.imageSrc;
  setTimeout(function () {
    updateHeader();
    updateCounters();
    updateBackground();
  }, 2500);
});

scrollButton.addEventListener("click", function () {
  secondScreen.scrollIntoView({
    behavior: "smooth",
  });
});

updateCounters();