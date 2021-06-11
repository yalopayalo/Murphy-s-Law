var options = [
    {
      imageSrc: "up-once.gif",
    },
    {
      imageSrc: "down-once.gif",
    },
  ];
  
  var lawWorks = "law works";
  var lawDoesntWork = "law does not work";
  var tryAgain = "drop again to know the result";
  
  function getRandomOptionIndex() {
    return Math.random() > 0.5 ? 0 : 1;
  }
  
  var results = [1, 1];
  
  var firstScreen = document.querySelector(".first-screen");
  var resultText = document.querySelector(".result-text");
  var upCount = document.querySelector(".up-count");
  var downCount = document.querySelector(".down-count");
  var dropButton = document.querySelector(".drop-button");
  var image = document.querySelector(".image");
  
  function updateBackground() {
    var total = results[0] + results[1];
    var percent = (results[0] / total) * 100;
    var gradient =
      "linear-gradient(to right, green 0%, green " +
      percent +
      "%, red " +
      percent +
      "%, red 100%)";
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
  
  updateCounters();