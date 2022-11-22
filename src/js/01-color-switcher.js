const refs = {
  btnStartRefs: document.querySelector('[data-start]'),
  btnStopRefs: document.querySelector('[data-stop]'),
  bodyRef: document.body,
};

refs.btnStartRefs.addEventListener('click', onChangeColorClick);
refs.btnStopRefs.addEventListener('click', onStopChangeColorClick);

console.log(refs);

let timerId = null;

function onChangeColorClick() {
  timerId = setInterval(() => {
    refs.bodyRef.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onStopChangeColorClick() {
  clearInterval(timerId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
