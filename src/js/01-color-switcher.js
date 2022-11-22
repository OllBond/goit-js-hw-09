const refs = {
  btnStartRefs: document.querySelector('[data-start]'),

  btnStopRefs: document.querySelector('[data-stop]'),
};

refs.btnStartRefs.addEventListener('click', onChangeColorBody);
refs.btnStopRefs.addEventListener('click', onStopChangeColorBody);

console.log(refs);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
