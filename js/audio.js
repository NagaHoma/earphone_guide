const audioButtons = document.querySelectorAll('.js-play-audio');
audioButtons.forEach((button) => {
  const audioFile = document.getElementById(`${button.dataset.audio}`)
  const originalButtonText = button.textContent
  button.addEventListener('click', () => {
    if (audioFile.paused) {
      audioFile.play();
      button.textContent = '音声を止める';
    } else {
      audioFile.pause();
      button.textContent = originalButtonText;
    }
  });
  audioFile.addEventListener('ended', () => {
    button.textContent = originalButtonText;
  });
})