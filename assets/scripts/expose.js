window.addEventListener("DOMContentLoaded", init);

function init() {
  const hornSelect = document.getElementById("horn-select");
  const hornImage = document.querySelector("#expose img");
  const volumeSlider = document.getElementById("volume");
  const volumeImage = document.querySelector("#volume-controls img");
  const playButton = document.querySelector("button");
  const hornAudio = document.querySelector("audio");
  hornAudio.volume = volumeSlider.value / 100;
  hornSelect.addEventListener("change", function () {
    const selected = hornSelect.value;
    hornImage.src = `assets/images/${selected}.svg`;
    hornAudio.src = `assets/audio/${selected}.mp3`;
  });
  volumeSlider.addEventListener("input", function () {
    const volume = Number(volumeSlider.value);
    hornAudio.volume = volume / 100;
    if (volume == 0) {
      volumeImage.src = "assets/icons/volume-level-0.svg";
    } else if (volume < 33) {
      volumeImage.src = "assets/icons/volume-level-1.svg";
    } else if (volume < 67) {
      volumeImage.src = "assets/icons/volume-level-2.svg";
    } else {
      volumeImage.src = "assets/icons/volume-level-3.svg";
    }
  });
  playButton.addEventListener("click", function () {
    // restart audio so repeated clicks always play sound
    hornAudio.currentTime = 0;
    hornAudio.play();
    if (hornSelect.value === "party-horn") {
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
    }
  });
}
