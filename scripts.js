var options = [
    {
      text: "маслом вверх",
      videoSrc: "up.mp4",
    },
    {
      text: "маслом вниз",
      videoSrc: "up.mp4",
    },
  ];
  
  function getRandomOptionIndex() {
    return Math.random() > 0.5 ? 0 : 1;
  }
  
  var results = [1, 1];
  
  var resultText = document.querySelector(".result-text");
  var upCount = document.querySelector(".up-count");
  var downCount = document.querySelector(".down-count");
  var dropButton = document.querySelector(".drop-button");
  var video = document.querySelector(".video");
  
  function updateBackground() {
    var total = results[0] + results[1];
    var percent = (results[0] / total) * 100;
    var gradient =
      "linear-gradient(to right, green 0%, green " +
      percent +
      "%, red " +
      percent +
      "%, red 100%)";
    document.body.style.background = gradient;
  }
  
  function updateCounters() {
    upCount.innerHTML = "up: " + (results[0] - 1);
    downCount.innerHTML = "down: " + (results[1] - 1);
  }
  
  dropButton.addEventListener("click", function () {
    var optionIndex = getRandomOptionIndex();
    var option = options[optionIndex];
    resultText.innerHTML = option.text;
    results[optionIndex]++;
    updateBackground();
    updateCounters();
    video.src = option.videoSrc;
    video.play();
  });
  
  updateCounters();