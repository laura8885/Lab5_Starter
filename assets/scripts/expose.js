window.addEventListener("DOMContentLoaded", init);

function init() {
  // SELECT DOM ELEMENTS
  const hornSelect = document.getElementById("horn-select");
  const hornImage = document.querySelector("#expose img");
  const volumeSlider = document.getElementById("volume");
  const volumeImage = document.querySelector("#volume-controls img");
  const playButton = document.querySelector("button");
  const hornAudio = document.querySelector("audio");

  // set default volume (0–1 scale for audio element)
  hornAudio.volume = volumeSlider.value / 100;

  // change horn with image + sound
  hornSelect.addEventListener("change", function () {
    const selected = hornSelect.value;

    // update image based on selected horn
    hornImage.src = `assets/images/${selected}.svg`;

    // update audio source based on selected horn
    hornAudio.src = `assets/audio/${selected}.mp3`;
  });

  // Volume Slider(icon + audio volume)
  volumeSlider.addEventListener("input", function () {
    const volume = Number(volumeSlider.value);

    // update actual audio volume (0.0 - 1.0)
    hornAudio.volume = volume / 100;

    // update volume icon based on range
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

  // play button and confetti
  playButton.addEventListener("click", function () {
    // restart audio so repeated clicks always play sound
    hornAudio.currentTime = 0;
    hornAudio.play();

    // only trigger confetti for party horn
    if (hornSelect.value === "party-horn") {
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
    }
  });
}