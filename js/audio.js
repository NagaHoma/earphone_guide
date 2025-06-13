const audioButton = document.querySelector('.js-play-audio');
const audioFile = document.getElementById('sample-audio')
const originalButtonText = audioButton.textContent
audioButton.addEventListener('click', () => {
  if (audioFile.paused) {
    audioFile.play();
    audioButton.textContent = '音声を止める';
  } else {
    audioFile.pause();
    audioButton.textContent = originalButtonText;
  }
});
audioFile.addEventListener('ended', () => {
  audioButton.textContent = originalButtonText;
});