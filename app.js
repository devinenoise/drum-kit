window.addEventListener('keydown', function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; // if there's no audio, stop the function from running
  audio.currentTime = 0; // rewind the start
  audio.play();
  key.classList.add('playing'); // change the pad color
});

function removeTransition(e) {
  if (e.propertyName !== 'transform') return; // skip if it's not transform
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');

keys.forEach(key => key.addEventListener('transitionend', removeTransition));
